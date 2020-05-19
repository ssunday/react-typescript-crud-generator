import * as React from 'react';
import { Route, Switch } from 'react-router';
import { New#resource# } from './New#resource#';
import { Edit#resource# } from './Edit#resource#';
import { Index#resource# } from './Index#resource#';
import { Show#resource# } from './Show#resource#';
import { #resource#Layout } from './#resource#Layout';

export const #resource#Routes = (): JSX.Element => {
  return (
    <Switch>
      <#resource#Layout>
        <Route exact path="/#pluralLower#/" component={Index#resource#} />
        <Switch>
          <Route exact path="/#pluralLower#/new" component={New#resource#} />
          <Route path="/#pluralLower#/:id/edit" component={Edit#resource#} />
          <Route path="/#pluralLower#/:id" component={Show#resource#} />
        </Switch>
      </#resource#Layout>
    </Switch>
  );
};
