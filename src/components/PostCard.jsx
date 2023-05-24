export const PostCard = (props) => {
  const {post} = props
  // console.log(post)
  return (
    <div className="w-80 border-gray-cardBorder border bg-gray-cardBg m-1">
      {post.creator.name}
    </div>
  );
};
