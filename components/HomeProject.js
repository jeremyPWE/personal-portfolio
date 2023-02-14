import Link from "next/link";
import React from "react";
import Section from "./Section";

function HomeProject() {
  return (
    <Section className="pt-[100px]">
      <h2>Personal Project</h2>
      <Link href="/project/news">news</Link>
    </Section>
  );
}

export default HomeProject;
