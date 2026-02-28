import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllTags } from "../../api/post";
import { X } from "lucide-react";

const TagSelect = () => {
  const [tags, setTags] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  useEffect(() => {
    getAllTags().then((data) => setTags(data));
  }, []);

  const handleClick = () => {
    setSearchParams((prev) => prev.delete("tag"));
  };

  return (
    <>
      <label htmlFor="tag">
        <strong>Filter by tag name:</strong>{" "}
      </label>
      <select
        id="tag"
        value={tag || ""}
        onChange={(e) => setSearchParams({ tag: e.target.value })}
        className="border ml-1 p-3 rounded-2xl"
      >
        <option value="" disabled>
          Select a tag
        </option>
        {tags.map((tag, index) => (
          <option key={index + 1} value={tag.slug}>
            {tag.name}
          </option>
        ))}
      </select>
      <button
        className={`${tag === null ? "hidden" : "cursor-pointer border border-zinc-400 rounded-2xl ml-2.5"}`}
        onClick={handleClick}
      >
        <X size={30} />
      </button>
    </>
  );
};

export default TagSelect;
