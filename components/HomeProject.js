import Link from "next/link";
import React from "react";
import Section from "./Section";

function HomeProject() {
  return (
    <Section className="py-[100px]">
      <div className="w-full">
        <h2 className="">Personal Project</h2>
        <div className="flex w-full justify-between pt-[40px]">
          <Link href="/project/news" className="border rounded-md">
            <div>
              <h3>NEWS APP</h3>
            </div>
          </Link>
          <Link href="/project/kanban" className="border rounded-md">
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
