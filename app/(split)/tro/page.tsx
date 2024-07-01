import { tro_hof } from "@/libs/data";
import { BasePageTemplate } from "@/templates/BasePageTemplate";

export default function TRO() {
  return (
    <BasePageTemplate
      table={
        <pre>
          <code>{tro_hof}</code>
        </pre>
      }
      >
      <p>
        The attached table lists authors with <strong>three</strong> or more
        total papers in <strong>IEEE Transactions on Robotics</strong>. The
        number in a column indicates the number of papers the individual had
        that year.
      </p>
    </BasePageTemplate>
  );
}
