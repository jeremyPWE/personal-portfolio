import { useRecoilState } from "recoil";
import { filtersAtom, imageAtom, viewAtom } from "../../atoms/filtersAtom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NewsFilters = () => {
  const [filters, setFilters] = useRecoilState(filtersAtom);
  const [view, setView] = useRecoilState(viewAtom);
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
        className="rounded-md px-[10px] bg-blue-500"
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
                ? "px-[15px] border rounded-md cursor-pointer py-[5px] bg-yellow-400 text-[#0F1012] font-bold"
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
      <div className="flex justify-center items-center pl-[20px]">
        <div className="form-check form-switch">
          <label
            className="form-check-label inline-block"
            htmlFor="flexSwitchCheckDefault"
          >
            Show Image
          </label>
          <input
            className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            onChange={() => setSimage(!simage)}
          />
        </div>
      </div>
      {view.numCols === 1 ? (
        <div
          className="hidden lg:flex items-center gap-x-[8px] border px-[8px] rounded-md cursor-pointer"
          onClick={() => setView({ ...view, numCols: 2 })}
        >
          <p>List</p>
          <div className="flex flex-col gap-y-[3px]">
            <div className="w-[20px] h-[6px] bg-white" />
            <div className="w-[20px] h-[6px] bg-white" />
          </div>
        </div>
      ) : (
        <div
          className="hidden lg:flex items-center gap-x-[8px] border px-[8px] rounded-md cursor-pointer"
          onClick={() => setView({ ...view, numCols: 1 })}
        >
          <p>Grid</p>
          <div className="flex flex-col gap-y-[3px]">
            <div className="flex gap-[3px]">
              <div className="w-[6px] h-[6px] bg-white" />
              <div className="w-[6px] h-[6px] bg-white" />
            </div>
            <div className="flex gap-[3px]">
              <div className="w-[6px] h-[6px] bg-white" />
              <div className="w-[6px] h-[6px] bg-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsFilters;
