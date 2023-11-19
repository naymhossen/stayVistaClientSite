/* eslint-disable react/prop-types */
import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }
    const updatedQuery = { ...currentQuery, category: label };
    const url = queryString.stringifyUrl({
      url: "/",
      query: updatedQuery,
    });
    navigate(url);
  };
  params.get("category");

  return (
    <>
      <div
        onClick={handleClick}
        className={`flex flex-col items-center justify-center gap-2 p-4 md:p-3 lg:p-1   hover:text-neutral-800 transition cursor-pointer ${
          selected ? "border-b-2 border-stone-700" : " border-b-2 border-stone-100"
        } `}
      >
        <div>
          <Icon size={26} />
          <h1>{label}</h1>
        </div>
      </div>
    </>
  );
};

export default CategoryBox;
