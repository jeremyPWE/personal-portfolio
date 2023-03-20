import Header from "../../../components/Header";
import Layout from "../../../components/Layout";

export default function Leetcode() {
  return (
    <>
      <Header />
      <Layout>
        <div className="px-[20px] flex gap-[20px] w-full max-w-[1920px] pt-[50px]">
          <div className="w-1/5 block border border-red-200">
            leetcode question
          </div>
          <div className="grow block border border-blue-400">
            leetcode answer
          </div>
        </div>
      </Layout>
    </>
  );
}
