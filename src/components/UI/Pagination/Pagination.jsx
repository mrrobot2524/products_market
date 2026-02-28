import { useSearchParams } from "react-router-dom";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      {pages.map((_, index) => {
        const pageeNumber = index + 1;
        return (
          <button
            key={index}
            onClick={() => {
              (setCurrentPage(pageeNumber),
                setSearchParams({ page: pageeNumber }));
            }}
            className={
              Number(currentPage) === pageeNumber
                ? "bg-gray-400 text-black font-bold w-10 h-10 rounded-3xl"
                : "w-10 h-10 bg-indigo-900 rounded-3xl text-white cursor-pointer"
            }
          >
            {pageeNumber}
          </button>
        );
      })}
    </>
  );
};
export default Pagination;
