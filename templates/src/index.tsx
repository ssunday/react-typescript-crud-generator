import * as React from 'react';
import { #resource# } from './#resource#';

export const Index#resource# = (): JSX.Element => {
  const [#pluralLower#, set#plural#] = React.useState<#resource#[]>([]);

  const get#plural# = async (): Promise<void> => {
  };

  React.useEffect(() => {
    get#plural#();
  });

  return (
    <div>
      <h1>#plural#</h1>
    </div>
  );
};
