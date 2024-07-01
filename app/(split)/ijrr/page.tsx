import { ijrr_hof } from "@/libs/data";
import { BasePageTemplate } from "@/templates/BasePageTemplate";

export default function IJRR() {
  return (
    <BasePageTemplate
      table={
        <pre>
          <code>{ijrr_hof}</code>
        </pre>
      }
    >
      <p>
        The attached table lists authors with <strong>three</strong> or more
        total papers in{" "}
        <strong>International Journal of Robotics Research</strong>. The number
        in a column indicates the number of papers the individual had that year.
      </p>
    </BasePageTemplate>
  );
}
