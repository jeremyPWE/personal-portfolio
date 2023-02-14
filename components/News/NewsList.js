import Link from "next/link";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import dateFormatter from "../../lib/dateFormatter";
import { filtersAtom, imageAtom } from "../../atoms/filtersAtom";
import { useRecoilState } from "recoil";
import useDebounce from "../../hooks/useDebounce";

const NewsList = () => {
  const [filters, setFilters] = useRecoilState(filtersAtom);
  const [simage, setSimage] = useRecoilState(imageAtom);
  const debouncedSearch = useDebounce(filters.search, 500);
  const baseURL = "https://newsapi.org/v2/everything?q=";
  const { data, error } = useSWR(
    () =>
      `${baseURL}${
        debouncedSearch ? debouncedSearch : filters.category
      }&sortBy=${filters.sort}&page=${filters.currentPage}&apiKey=${
        process.env.NEXT_PUBLIC_API_KEY
      }`,
    fetcher
  );

  if (error) return <div>Could not fetch articles, try again later</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul className="flex flex-col gap-y-[14px] pt-[20px]">
      {data &&
        data.articles.map((article, index) => (
          <Link
            href={data.articles[index].url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-md px-[10px]"
          >
            <li className="py-[5px]">
              <h3 className="heading-three">{article.title}</h3>
              <p className="pt-[5px]">{article.description}</p>
              {simage && (
                <img
                  src={article.urlToImage}
                  alt="Article Photo"
                  className="w-1/2 py-[10px]"
                />
              )}
              <div className="pt-[10px] text-[14px]">
                <span>Written by {article.author}</span>
                <span>
                  at {dateFormatter.format(Date.parse(article.publishedAt))}
                </span>
                <span> – {article.source.name}</span>
              </div>
            </li>
          </Link>
        ))}
      <div className="flex gap-x-[20px]">
        {filters.currentPage > 1 && (
          <button
            onClick={() =>
              setFilters({ ...filters, currentPage: filters.currentPage - 1 })
            }
            className="border py-[5px] px-[20px] rounded-md"
          >
            &larr; Go back
          </button>
        )}
        <button
          onClick={() =>
            setFilters({ ...filters, currentPage: filters.currentPage + 1 })
          }
          disabled={filters.currentPage * 20 >= data.totalResults}
          className="border py-[5px] rounded-md w-1/2"
        >
          Load More...{" "}
          {filters.currentPage * 20 <= data.totalResults && (
            <>({data.totalResults - filters.currentPage * 20})</>
          )}
        </button>
      </div>
    </ul>
  );
};

export default NewsList;
