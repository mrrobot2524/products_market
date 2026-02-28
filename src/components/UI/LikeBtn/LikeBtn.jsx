import { ThumbsUp } from "lucide-react";

const LikeBtn = ({ children }) => {
  return (
    <button className=" flex  gap-2 cursor-pointer items-center w-full">
      <ThumbsUp />
      {children}
    </button>
  );
};
export default LikeBtn;
