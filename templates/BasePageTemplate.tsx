import { Fragment } from "react";

const BasePageTemplate = (props: {
  children: React.ReactNode;
  table: React.ReactNode;
}) => {
  return (
    <Fragment>
      <div className="preamble">{props.children}</div>
      <main>
        <div className="text-center">{props.table}</div>
      </main>
    </Fragment>
  );
};

export { BasePageTemplate };
