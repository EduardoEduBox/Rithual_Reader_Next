import { UseFirestore } from "@/app/Context/FirestoreContext";
import { GoComment } from "react-icons/go";
import { formatNumber } from "../utils/numberFormatter";

type ShareButtonProps = {
  id: number;
};

const CommentButton: React.FC<ShareButtonProps> = ({ id }) => {
  const { chapters } = UseFirestore();
  const currentChapter = chapters.find((chapter) => Number(chapter.id) === id);
  const numberOfComments = formatNumber(currentChapter?.comments.length ?? -1);

  return (
    <div className="flex flex-col items-center justify-center">
      <GoComment></GoComment>
      <p>{numberOfComments}</p>
    </div>
  );
};

export default CommentButton;
