import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Header />
      <Layout>
        <Hero />
        <div className=""></div>
      </Layout>
    </div>
  );
}
