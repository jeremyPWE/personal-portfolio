import Link from "next/link";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import React, { useState, useEffect } from "react";
import dateFormatter from "../../lib/dateFormatter";
import { filtersAtom, imageAtom, viewAtom } from "../../atoms/filtersAtom";
import { useRecoilState } from "recoil";
import useDebounce from "../../hooks/useDebounce";
import Image from "next/image";

const NewsList = () => {
  const [filters, setFilters] = useRecoilState(filtersAtom);
  const [view, setView] = useRecoilState(viewAtom);
  const [simage, setSimage] = useRecoilState(imageAtom);
  const debouncedSearch = useDebounce(filters.search, 5000);

  //using swr resulting in cors block?? doesnt happen before
  /*   const baseURL = "https://newsapi.org/v2/everything?q=";
  const { data, error } = useSWR(
    () =>
      `${baseURL}${
        debouncedSearch ? debouncedSearch : filters.category
      }&sortBy=${filters.sort}&page=${filters.currentPage}&apiKey=${
        process.env.NEXT_PUBLIC_API_KEY
      }`,
    fetcher
  );

 */

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/news?search=${
            debouncedSearch ? debouncedSearch : filters.category
          }&sort=${filters.sort}&currentPage=${filters.currentPage}`
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [debouncedSearch, filters.category, filters.sort, filters.currentPage]);

  if (error) return <div>Could not fetch articles, try again later</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul className="flex flex-col gap-y-[14px] pt-[20px]">
      <div
        className={`grid ${
          view.numCols === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        } gap-4`}
      >
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
                <h3 className="heading-three font-bold">{article.title}</h3>
                <p className="pt-[5px] opacity-70">{article.description}</p>
                {simage && article.urlToImage ? (
                  <div
                    className={`relative ${
                      view.numCols === 1 ? "w-2/3 lg:w-1/2 2xl:w-1/4" : "w-2/3"
                    } aspect-[1.5]`}
                  >
                    <Image
                      src={article.urlToImage}
                      alt="Article Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="pt-[10px] text-[14px] opacity-70">
                  <span>Written by {article.author}</span>
                  <span>
                    at {dateFormatter.format(Date.parse(article.publishedAt))}
                  </span>
                  <span> &ndash; {article.source.name}</span>
                </div>
              </li>
            </Link>
          ))}
      </div>
      <div className="flex gap-x-[20px]">
        {filters.currentPage > 1 && (
          <button
            onClick={() =>
              setFilters({ ...filters, currentPage: filters.currentPage - 1 })
            }
            className="border py-[5px] px-[20px] rounded-md w-1/3"
          >
            &larr; Go back
          </button>
        )}
        <button
          onClick={() =>
            setFilters({ ...filters, currentPage: filters.currentPage + 1 })
          }
          disabled={filters.currentPage * 20 >= data.totalResults}
          className="border py-[5px] rounded-md w-full"
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
