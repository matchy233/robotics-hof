"use client";

import { BasePageTemplate } from "@/templates/BasePageTemplate";
import Link from "next/link";
import React from "react";
import { Fragment } from "react";

export default function PigLayout({
  children,
  all,
  last5,
}: Readonly<{
  children: React.ReactNode;
  all: React.ReactNode;
  last5: React.ReactNode;
}>) {
  // state: all / last5
  const [state, setState] = React.useState("all");

  const setStateToAll = () => {
    setState("all");
  };

  const setStateToLast5 = () => {
    setState("last5");
  };

  return (
    <BasePageTemplate table={<div>{state === "all" ? all : last5}</div>}>
      <>
        <p>
          The Robotics Hall of Fame aims to recognize the most prolific authors
          in the field of robotics. The authors are ranked by the number of
          papers they have published in the top robotics conferences and
          journals. The attached table shows authors with at least a total of{" "}
          <strong>20</strong> papers published in:{" "}
          <u>
            Robotics: Science and Systems (<strong>RSS</strong>)
          </u>
          ,{" "}
          <u>
            Science Robotics(<strong>SR</strong>)
          </u>
          ,{" "}
          <u>
            IEEE Transactions on Robotics (<strong>TRO</strong>)
          </u>
          , and{" "}
          <u>
            International Journal of Robotics Research (<strong>IJRR</strong>)
          </u>
          . A separate Hall of Fame is also available for each
          conference/journal. All the tables are kept in 100-ish rows.
        </p>
        <p>
          This website is inspired by{" "}
          <Link href="http://www.robothalloffame.org/">Robot Hall of Fame</Link>
          ,{" "}
          <Link href="https://pages.cs.wisc.edu/~arch/www/iscabibhall.html">
            ISCA Hall of Fame
          </Link>
          ,{" "}
          <Link href="https://www.cs.utexas.edu/~vijay/hall.html">
            SOSP/OSDI Hall of Fame
          </Link>
          , and{" "}
          <Link href="https://www.sigmicro.org/awards/microhof.php">
            MICRO Hall of Fame
          </Link>{" "}
        </p>
        <p>
          Please see <Link href="/qna">Q&A</Link> first if you have any
          questions. All contents are licensed under{" "}
          <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
            CC BY-NC-ND 4.0
          </a>
          .
        </p>
        <p>Three disclaimers: </p>
        <ul>
          <li>
            A real Hall of Fame should be determined by impact, not paper count.
          </li>
          <li>
            Their scripts use <Link href="https://dblp.org">DBLP</Link> to
            obtain the paper counts. Since DBLP is not 100% up-to-date, there
            may be delays in updating paper counts each year.
          </li>
          <li>
            This data is compiled with scripts; thus, typos and name changes may
            cause miscounts.
          </li>
        </ul>
        <div className="flex justify-center">
          <button
            className={`${state === "all" ? "btn-active" : "btn-inactive"}`}
            onClick={setStateToAll}
          >
            All Years
          </button>{" "}
          <button
            className={`${state === "last5" ? "btn-active" : "btn-inactive"}`}
            onClick={setStateToLast5}
          >
            Last 5 Years
          </button>
        </div>
      </>
    </BasePageTemplate>
  );
}
