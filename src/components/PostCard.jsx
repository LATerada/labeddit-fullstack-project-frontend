import { LikeIcon } from "./LikeIcon";
import { DislikeIcon } from "./DislikeIcon";
import { CommentIcon } from "./CommentIcon";
import UserService from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { goToPostCommentsPage } from "../routes/coordinator";
import { useState } from "react";

export const PostCard = (props) => {
  const { post, headers, fetchPosts } = props;
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const id = post.id;
  const navigate = useNavigate();

  const likeOrDislikePost = async (like) => {
    const body = {
      like: like,
    };
    const likedOrDisliked = {
      headers,
      postId: id,
      like: like,
    };

    const response = await UserService.likeOrDislikePost(headers, body, id);

    if (response.status === 200) {
      fetchPosts();
    }
  };

  return (
    <div className="w-80 grid  border-gray-cardBorder border bg-gray-cardBg m-1.5 font-ibm px-2.5 py-2 rounded-xl">
      <p className="font-normal text-xs text-gray-inputPost max-h-7">
        Send by {post.creator.name}
      </p>
      <p className="flex flex-wrap font-normal text-lg text-black py-4">
        {post.postContent}
      </p>
      <div className="flex self-end gap-2 max-h-7">
        {" "}
        <div className="flex justify-center items-center border border-gray-cardBorder rounded-xl px-2 gap-3 h-7">
          <button onClick={() => likeOrDislikePost(true)}>
            <LikeIcon liked={liked} />
          </button>
          <span className="font-bold text-xxs">
            {post.likes - post.dislikes}
          </span>
          <button onClick={() => likeOrDislikePost(false)}>
            <DislikeIcon disliked={disliked} />
          </button>
        </div>
        <button
          className="flex justify-center items-center border border-gray-cardBorder rounded-xl px-2 gap-2 h-7"
          onClick={() => goToPostCommentsPage(navigate, id)}
        >
          <CommentIcon />
          <span className="font-normal text-xxs">{post.comments}</span>
        </button>
      </div>
    </div>
  );
};
