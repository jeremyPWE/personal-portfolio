import { RecoilRoot } from "recoil";
import NewsFilters from "../../../components/News/NewsFilters";
import NewsList from "../../../components/News/NewsList";
import Section from "../../../components/Section";
import Layout from "../../../components/Layout";
import Header from "../../../components/Header";

export default function News() {
  return (
    <RecoilRoot>
      <Header />
      <Layout>
        <Section className="flex-col gap-y-[20px] pb-[100px]">
          <h1>News</h1>
          <NewsFilters />
          <NewsList />
        </Section>
      </Layout>
    </RecoilRoot>
  );
}
