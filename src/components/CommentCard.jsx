import { LikeIcon } from "./LikeIcon";
import { DislikeIcon } from "./DislikeIcon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserService from "../services/userService";

export const CommentCard = (props) => {
  const { comment, headers, fetchComments } = props;
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const id = comment.commentId;
  const navigate = useNavigate();

  const likeOrDislikeComment = async (like) => {
    const body = {
      like: like,
    };
    const likedOrDisliked = {
      headers,
      commentId: id,
      like: like,
    };

    const response = await UserService.likeOrDislikeComment(headers, body, id);

    if (response.status === 200) {
      fetchComments();
    }
  };

  return (
    <div className="w-80 grid border-gray-cardBorder border bg-gray-cardBg m-1.5 font-ibm px-2.5 py-2 rounded-xl">
      <p className="font-normal text-xs text-gray-inputPost max-h-7">
        Send by {comment.name}
      </p>
      <p className="flex flex-wrap font-normal text-lg text-black py-4 font-ibm">
        {comment.commentContent}
      </p>
      <div className="flex self-end gap-2 max-h-7">
        {" "}
        <div className="flex justify-center items-center border border-gray-cardBorder rounded-xl px-2 gap-3 h-7">
          <button onClick={() => likeOrDislikeComment(true)}>
            <LikeIcon liked={liked} />
          </button>
          <span className="font-bold text-[9.5px] text-gray-inputPost">
            {comment.likes - comment.dislikes}
          </span>
          <button onClick={() => likeOrDislikeComment(false)}>
            <DislikeIcon disliked={disliked} />
          </button>
        </div>
      </div>
    </div>
  );
};
