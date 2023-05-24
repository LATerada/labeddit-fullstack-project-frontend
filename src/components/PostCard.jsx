import like from "../assets/upArrow.svg";
import dislike from "../assets/downArrow.svg";
import comment from "../assets/comment.svg";

export const PostCard = (props) => {
  const { post } = props;
  console.log(post);
  return (
    <div className="w-80 grid grid-rows-3 border-gray-cardBorder border bg-gray-cardBg m-1.5 font-ibm px-2.5 py-2 rounded-xl">
      <p className="font-normal text-xs text-gray-inputPost">Send by {post.creator.name}</p>
      <p className="flex flex-wrap font-normal text-lg text-black py-2">{post.postContent}</p>
      <div  className="flex gap-2">
        <button className="flex justify-center items-center border border-gray-cardBorder rounded-xl px-2 gap-4 h-7">
          <img className="w-3.5" src={like}></img>
          <span className="font-bold text-xxs">{post.likes - post.dislikes}</span>
          <img className="w-3.5"s src={dislike}></img>
        </button>
        <button className="flex justify-center items-center border border-gray-cardBorder rounded-xl px-2 gap-4 h-7">
          <img className="w-3.5" src={comment}></img>
          <span className="font-normal text-xxs">{post.comments}</span>
        </button>
      </div>
    </div>
  );
};
