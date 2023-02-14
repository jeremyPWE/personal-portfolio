import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeProject from "../components/HomeProject";
import HomeWork from "../components/HomeWork";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <HomeWork />
        <HomeProject />
      </Layout>
    </>
  );
}
