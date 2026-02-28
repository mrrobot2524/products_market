import { ThumbsDown } from "lucide-react";

const DislikeBtn = ({ children }) => {
  return (
    <button className="flex cursor-pointer items-center gap-2 w-full">
      <ThumbsDown />
      {children}
    </button>
  );
};
export default DislikeBtn;
