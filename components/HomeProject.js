import Link from "next/link";
import React from "react";
import Section from "./Section";

function HomeProject() {
  return (
    <Section>
      <div className="w-full">
        <h2 className="">Personal Project</h2>
        <div className="flex w-full justify-between pt-[40px]">
          <Link href="/project/news">
            <div>
              <h3>NEWS APP</h3>
            </div>
          </Link>
          <Link href="/project/kanban">
            <div>
              <h3>KANBAN BOARD</h3>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default HomeProject;
