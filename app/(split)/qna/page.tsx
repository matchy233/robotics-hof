import Link from "next/link";

export default function QnaPage() {
  return (
    <main>
      <div className="preamble">
        <h1>Q&A</h1>
        <p>
          <strong>Q:</strong> Why are ICRA and IROS not included in the Hall of
          Fame?
        </p>
        <p>
          <strong>A:</strong> The standard deviation of the quality of papers of
          ICRA and IROS is very high. Prestigious as they are, those conferences
          have ~50% acceptance rates + publish nearly 2000 papers per year,
          which make them less selective than RSS/SR/TRO/IJRR. Finalist papers
          in ICRA and IROS can be a good inclusion, but it&apos;s difficult to curate
          due to the lack of API and the need to manually check each paper.
        </p>
        <p>
          Also, technically, DBLP only allows 1000 entries per query, which
          makes it difficult to get all papers from ICRA and IROS.
        </p>
        <br />
        <p>
          <strong>Q:</strong> Why is Journal of Field Robotics (JFR) not
          included in the Hall of Fame?
        </p>
        <p>
          <strong>A:</strong> JFR has a special focus on field robotics, which
          makes its scope rather small compared to the other journals and
          conferences included. It&apos;s definitely a great journal. If many people
          request it, I can consider adding it in the future.
        </p>
        <br />
        <p>
          <strong>Q:</strong> Why is the style of this website so simple?
        </p>
        <p>
          <strong>A:</strong> It&apos;s following the style of it&apos;s inspirations (especially MICRO).
        </p>
        <br />
        <p>
          <strong>Q:</strong> I think the paper quality of conference X is better. / I think the paper count of conference Y is wrong. / I have a suggestion for the Hall of Fame.
        </p>
        <p>
          <strong>A:</strong> Raise an issue or start a discussion thread <Link href="https://github.com/matchy233/robotics-hof">here</Link>. It&apos;s also possible to directly contact the author of this website. Link is in the footer.
        </p>
      </div>
    </main>
  );
}
