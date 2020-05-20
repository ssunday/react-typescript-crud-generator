import * as React from 'react';

export const #resource#Layout = (props: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <div className="#resourceLower#-container">
      {props.children}
    </div>
  );
};
