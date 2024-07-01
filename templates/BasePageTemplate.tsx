import { Fragment } from "react";

const BasePageTemplate = (props: {
  children: React.ReactNode;
  table: React.ReactNode;
}) => {
  return (
    <Fragment>
      <div className="preamble">{props.children}</div>
      <main>{props.table}</main>
    </Fragment>
  );
};

export { BasePageTemplate };
