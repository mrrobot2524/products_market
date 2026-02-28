import { useSearchParams } from "react-router-dom";

const TagBtn = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  return (
    <>
      <button
        onClick={() => setSearchParams({ tag: children })}
        className={
          tag === children
            ? "bg-white text-gray-900 w-full h-full cursor-default font-bold max-w-20 max-h-20 text-center rounded-2xl"
            : "bg-indigo-950 text-white w-full h-full cursor-pointer max-w-20 max-h-20 text-center rounded-2xl"
        }
      >
        {children}
      </button>
    </>
  );
};
export default TagBtn;
