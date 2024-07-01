"use client";

import { BasePageTemplate } from "@/templates/BasePageTemplate";
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
    <BasePageTemplate
      table={
        <div className="overflow-x-auto">{state === "all" ? all : last5}</div>
      }
    >
      <>
        <p>
          The attached table lists authors with eight or more total papers in
          Robotics: Science and Systems and Science Robotics. The number in a
          column indicates the number of papers the individual had that year.
        </p>
        <p>Three disclaimers: </p>
        <ul>
          <li>
            A real Hall of Fame should be determined by impact, not paper count.
          </li>
          <li>
            Their scripts use DBLP to obtain the paper counts. Since DBLP is not
            100% up-to-date, there may be delays in updating paper counts each
            year.
          </li>
          <li>
            This data is compiled with scripts, sorting on last name; thus,
            typos and name changes may cause miscounts.
          </li>
        </ul>
        <div className="justify-left sticky top-0">
          <button
            className={`${state === "all" ? "btn-active" : "btn-inactive"}`}
            onClick={setStateToAll}
          >
            All Years
          </button>{" "}
          /{" "}
          <button
            className={`${state === "last5" ? "btn-active" : "btn-inactive"}`}
            onClick={setStateToLast5}
          >
            Last 5 Years
          </button>
        </div>
      </>
    </BasePageTemplate>
    // </Fragment>
  );
}
