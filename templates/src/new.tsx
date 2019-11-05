import * as React from 'react';
import { #resource# } from './#resource#';

export const New#resource# = (): JSX.Element => {
  const [#resourceLower#, set#resource#] = React.useState<Partial<#resource#>>({});

  const save#resource# = async (): Promise<void> => {
  };

  React.useEffect(() => {
    get#resource#();
  });

  return (
    <div>
      <h1>New #resource#</h1>
    </div>
  );
};
