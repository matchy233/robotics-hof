import { rss_hof } from "@/libs/data";
import { BasePageTemplate } from "@/templates/BasePageTemplate";

export default function RSS() {
  return (
    <BasePageTemplate
      table={
        <pre>
          <code>{rss_hof}</code>
        </pre>
      }
    >
      <p>
          The attached table lists authors with <strong>six</strong> or more
          total papers in{" "}
          <strong>Robotics: Science and Systems and Science Robotics</strong>.
          The number in a column indicates the number of papers the individual
          had that year.
        </p>
    </BasePageTemplate>
  );
}
