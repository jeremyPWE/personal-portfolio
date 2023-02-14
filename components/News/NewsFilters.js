import { useRecoilState } from "recoil";
import { filtersAtom, imageAtom } from "../../atoms/filtersAtom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NewsFilters = () => {
  const [filters, setFilters] = useRecoilState(filtersAtom);
  const [simage, setSimage] = useRecoilState(imageAtom);
  const categories = ["Movies", "Tech", "Privacy", "Politics"];
  return (
    <div className="w-full flex gap-[20px]">
      <div className=" xl:w-[400px] flex relative border rounded-md">
        <input
          type="text"
          className="px-[10px] py-[5px] border-none rounded-md block w-full"
          placeholder="Search for keywords..."
          id="news-searchbar"
          onChange={(e) =>
            e.target.value.length >= 3 &&
            setFilters({
              ...filters,
              currentPage: 1,
              search: e.target.value,
            })
          }
        />

        {filters.search.length >= 3 && (
          <button
            onClick={() => {
              setFilters({ ...filters, search: "" });
              document.querySelector("#news-searchbar").value = "";
            }}
            className="flex items-center justify-center absolute top-0 right-[10px] h-[32px]"
          >
            <Icon icon={faTimes} />
          </button>
        )}
      </div>
      <select
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        className="rounded-md px-[10px]"
      >
        <option value="relevancy">Relevant</option>
        <option value="publishedAt">Newest</option>
        <option value="popularity">Popular</option>
      </select>

      <div className="flex items-center overflow-x-auto whitespace-nowrap gap-[10px]">
        {categories.map((category, index) => (
          <button
            className={
              filters.category === category && filters.search === ""
                ? "px-[15px] border rounded-md cursor-pointer py-[5px] bg-yellow-300"
                : "px-[15px] border rounded-md cursor-pointer py-[5px]"
            }
            key={index}
            onClick={() => {
              setFilters({ ...filters, search: "", currentPage: 1, category });
              document.querySelector("#news-searchbar").value = "";
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div class="flex justify-center items-center pl-[20px]">
        <div class="form-check form-switch">
          <label
            class="form-check-label inline-block text-gray-800"
            for="flexSwitchCheckDefault"
          >
            Show Image
          </label>
          <input
            class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            onChange={() => setSimage(!simage)}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsFilters;
