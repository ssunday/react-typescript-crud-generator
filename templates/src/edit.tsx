import * as React from 'react';
import { useParams } from 'react-router-dom';
import { #resource# } from './#resource#';

export const Edit#resource# = (): JSX.Element => {
  const { id } = useParams();

  const [#resourceLower#, set#resource#] = React.useState<#resource# | undefined>(undefined);

  const get#resource# = async (): Promise<void> => {
  };

  const save#resource# = async (): Promise<void> => {
  };

  React.useEffect(() => {
    get#resource#();
  }, [id]);

  return (
    <div>
      <h1>Edit #resource#</h1>
    </div>
  );
};
