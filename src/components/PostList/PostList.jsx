import { useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem";
import { getPosts, getPostsByTag } from "../../api/post";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import Select from "../UI/Select/Select";
import Pagination from "../UI/Pagination/Pagination";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const tag = searchParams.get("tag");
  const [totalPosts, setTotalPosts] = useState();
  const [currentPage, setCurrentPage] = useState(page || 1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const optNumber = [10, 25, 50, 100];

  let skip = (currentPage - 1) * limit;

  useEffect(() => {
    setLoading(true);
    if (!tag) {
      getPosts(skip, limit)
        .then((data) => {
          setPosts(data.posts);
          setTotalPosts(data.total);
        })
        .catch((e) => setError(e))
        .finally(() => setLoading(false));
    } else {
      getPostsByTag(tag)
        .then((data) => {
          setPosts(data.posts);
        })
        .finally(() => setLoading(false));
    }
  }, [tag, skip, limit]);
  const totalPages = Math.ceil(totalPosts / limit);
  const pages = useMemo(() => {
    return Array.from({ length: totalPages });
  }, [totalPages]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error) {
    if (error?.response?.status == 404) return "Not Found";
    else return error?.response?.data;
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-3.5">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <div className="flex gap-3 justify-center mt-4 mb-4">
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Select
          optValue={optNumber}
          defaultOption="Select number"
          onChange={(e) => setLimit(Number(e.target.value))}
          value={limit}
        />
      </div>
    </>
  );
};
export default PostList;
