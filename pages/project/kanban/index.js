import Input from "../../../components/Kanban/Input";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";
import Boards from "../../../components/Kanban/Boards";
import { TaskProvider } from "../../../hooks/useTask";

export default function Kanban() {
  return (
    <>
      <Header />
      <Layout>
        <TaskProvider>
          <Section className="mt-[20px]">
            <Input />
          </Section>
          <Boards />
        </TaskProvider>
      </Layout>
    </>
  );
}
