import Link from "next/link";
import React from "react";
import Section from "./Section";
import Image from "next/image";

function HomeProject() {
  return (
    <Section className="py-[100px]">
      <div className="w-full">
        <h2 className="">Personal Project</h2>
        <div className="grid grid-cols-2 w-full gap-x-[30px] pt-[40px]">
          <Link href="/project/news" className="border rounded-md">
            <div className="xl:py-[20px] xl:px-[40px]">
              <h3 className="pb-[15px]">NEWS APP</h3>
              <div className="relative w-full aspect-[1.593]">
                {/* <Image
                  src="/home-project/news-app-icon.png"
                  alt="news app icon"
                  fill
                  className="object-contain"
                /> */}
                <video playsInline loop autoPlay muted>
                  <source
                    src="/home-project/news-app-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <p className="pt-[8px] xl:pt-[15px]">
                The News App is an innovative tool powered by News API, designed
                to demonstrate the capabilities of API parameters and keep users
                informed with the latest news. With features like search and
                category selection, this app is made with modern technologies
                such as Next.js, Tailwind CSS, Axios, Recoil, and Debouncer.
              </p>
            </div>
          </Link>
          <Link href="/project/kanban" className="border rounded-md">
            <div className="xl:py-[20px] xl:px-[40px]">
              <h3 className="pb-[15px]">KANBAN BOARD</h3>
              <div className="relative w-full aspect-[1.593]">
                {/* <Image
                  src="/home-project/kanban-board-icon.png"
                  alt="kanban board icon"
                  fill
                  className="object-contain"
                /> */}
                <video playsInline loop autoPlay muted>
                  <source
                    src="/home-project/kanban-board-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <p className="pt-[8px] xl:pt-[15px]">
                The Kanban Board app is a simple, yet effective tool for project
                management. Created to learn about the powerful features of
                reducer, dynamic import, and local storage, this app allows
                users to efficiently manage their tasks. With its intuitive
                drag-and-drop feature, users can easily move tasks to different
                categories as they complete them.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default HomeProject;
