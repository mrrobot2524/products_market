import { Eye, Tags } from "lucide-react";
import TagBtn from "../UI/TagBtn/TagBtn";
import LikeBtn from "../UI/LikeBtn/LikeBtn";
import DislikeBtn from "../UI/DislikeBtn/DislikeBtn";

const PostItem = ({ post }) => {
  return (
    <div className="max-w-2xs bg-blue-100 rounded-2xl flex flex-col h-full">
      <div>
        <img
          src="https://ednews.net/uploads/news/39338/news.jpg"
          alt={post.title}
          className="rounded-2xl "
        />
        <h1 className="text-sky-600 font-bold mt-2  p-2">
          {post.title.slice(0, 20)}...
        </h1>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <p>{post.body.slice(0, 100)}...</p>
        <div className="flex items-center gap-1">
          <Tags />
          {post.tags.map((tag) => (
            <TagBtn key={tag}>{tag}</TagBtn>
          ))}
        </div>
      </div>
      <div className="mt-auto flex justify-between items-center p-3">
        <div className="flex gap-2 mt-auto">
          <LikeBtn>{post.reactions.likes}</LikeBtn>
          <DislikeBtn>{post.reactions.dislikes}</DislikeBtn>
        </div>
        <p className="flex gap-2 items-center">
          <Eye />
          {post.views}
        </p>
      </div>
    </div>
  );
};
export default PostItem;
