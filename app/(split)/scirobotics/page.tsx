import { Fragment } from "react";
import { sr_hof } from "@/libs/data";
import { BasePageTemplate } from "@/templates/BasePageTemplate";

export default function SciRobotics() {
  return (
    <BasePageTemplate
      table={
        <pre>
          <code>{sr_hof}</code>
        </pre>
      }
      >
      <p>
        The attached table lists authors with <strong>three</strong> or more
        total papers in <strong>Science Robotics</strong>. The number in a
        column indicates the number of papers the individual had that year.
      </p>
    </BasePageTemplate>
  );
}
