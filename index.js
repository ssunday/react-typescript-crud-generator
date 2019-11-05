#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');

program
  .version('1.0.0')
  .option('-r, --resource <RESOURCE>', 'Resource Name')
  .option('-p, --plural <PLURAL>', 'Plural form of the Resource')
  .parse(process.argv);

// Functions

const singular = program.resource;
const plural = program.plural || program.resource + 's';
const basePath = 'src/' + plural.toLowerCase() + '/';
const baseSpecPath = 'spec/' + plural.toLowerCase() + '/';

function constructFilePath(file) {
  return [basePath, singular, file].join('');
}

function constructSpecFilePath(file) {
  return [baseSpecPath, singular, file].join('');
}

function constructFilePathAction(file, extension) {
  return [basePath, file, singular, extension].join('');
}

function constructSpecFilePathAction(file, extension) {
  return [baseSpecPath, file, singular, extension].join('');
}

function constructFilePathNoResource(file) {
  return [basePath, file].join('');
}

function constructSubFolder(subfolder) {
  return [basePath, subfolder, '/'].join('');
}

function handleResult(file, error) {
  if (error) {
    console.log(error)
  } else {
    console.log('Generated: ' + file);
  }
}

function renderTemplate(file) {
  return fs.readFileSync('templates/' + file, 'utf8')
    .replace(/#resource#/g, singular)
    .replace(/#resourceLower#/g, singular.toLowerCase())
    .replace(/#plural#/g, plural)
    .replace(/#pluralLower#/g, plural.toLowerCase());
}

// Directories

[
  'src/',
  'spec/',
  basePath,
  baseSpecPath,
  constructSubFolder('index'),
  constructSubFolder('show'),
  constructSubFolder('edit'),
  constructSubFolder('shared'),
].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log('Generated: ' + dir);
  }
});

// Files

[
  {
    path: constructFilePathAction('Index', '.tsx'),
    template: 'src/index.tsx'
  },
  {
    path: constructFilePathAction('Show', '.tsx'),
    template: 'src/show.tsx'
  },
  {
    path: constructFilePathAction('Edit', '.tsx'),
    template: 'src/edit.tsx'
  },
  {
    path: constructFilePathAction('New', '.tsx'),
    template: 'src/edit.tsx'
  },
  {
    path: constructFilePath('Routes.tsx'),
    template: 'src/routes.tsx'
  },
  {
    path: constructFilePath('.ts'),
    template: 'src/type.ts'
  },
  {
    path: constructSpecFilePathAction('Index', '.spec.tsx'),
    template: 'spec/index.spec.tsx'
  },
  {
    path: constructSpecFilePathAction('Show', '.spec.tsx'),
    template: 'spec/show.spec.tsx'
  },
  {
    path: constructSpecFilePathAction('New', '.spec.tsx'),
    template: 'spec/new.spec.tsx'
  },
  {
    path: constructSpecFilePathAction('Edit', '.spec.tsx'),
    template: 'spec/edit.spec.tsx'
  },
].forEach((fileData) => {
  const filePath = fileData.path;
  if (!fs.existsSync(filePath)) {
    let data = '';
    if (fileData.template) {
      data = renderTemplate(fileData.template);
    }
    fs.writeFile(filePath, data, (error) => { handleResult(filePath, error) });
  }
});
