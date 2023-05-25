import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../components/Button";
import { useForm } from "../hooks/useForm";
import { TextArea } from "../components/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import { CommentCard } from "../components/CommentCard";
import { PostCard } from "../components/PostCard";
import UserService from "../services/userService";
import ValidationService from "../services/validationService";
import { goToLoginPage } from "../routes/coordinator";

const PostCommentsPage = () => {
  const [postToRender, setPostTorender] = useState();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [isCommentValid, setIsCommentValid] = useState(true);
  const [newComment, setNewComment] = useState(false);
  const textAreaErrorMessage = "Comments need to have at least 1 caracter."

  let { id } = useParams();

  const navigate = useNavigate()

  const token = localStorage.getItem("token");
  if(!token){
    goToLoginPage(navigate)
  }
  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const { form, onChangeInputs, clearInputs } = useForm({
    commentContent: "",
  });
  const body = {
    content: form.commentContent,
  };

  const fetchPost = async () => {
    const response = await UserService.getPosts(headers);
    setPosts(response);
    const postToRender = response.find((post) => post.id === id);
    setPostTorender(postToRender);
    setIsLoaded(true);
  };

  const fetchComments = async () => {
    const response = await UserService.getCommentsByPostId(headers, id);
    setComments(response);
  };

  const onSubmit = async (event) => {
    setIsPosting(true);
    event.preventDefault();

    setIsCommentValid(ValidationService.postValidation(form.commentContent));

    if (ValidationService.postValidation(form.commentContent)) {
      await UserService.createComment(headers, body, postToRender.id);
      clearInputs();
      setNewComment(true);
    }
    setIsPosting(false);
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [newComment]);

  if (isLoaded) {
    return (
      <div className="grid justify-items-center content-center w-full pb-8">
        <div className="pt-4">
          <PostCard
            post={postToRender}
            headers={headers}
            fetchPosts={fetchPost}
          />
        </div>
        <form onSubmit={onSubmit}>
          <TextArea
            name="commentContent"
            type="text"
            value={form.commentContent}
            onChange={onChangeInputs}
            placeholder="Write your comment..."
            isValid={isCommentValid}
          ></TextArea>
          {isCommentValid ? (
            <></>
          ) : (
            <p className="w-80 mb-2 text-red">{textAreaErrorMessage}</p>
          )}
        </form>
        <Button
          type="submit"
          text={isPosting ? "Posting..." : "Post"}
          round={"rounded-xl"}
          bg={"gradient"}
          onClick={onSubmit}
        ></Button>
        <div className=" bg-gradient-to-r from-rose to-orange-border w-80 h-px my-4"></div>
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.commentId}
              comment={comment}
              headers={headers}
              fetchComments={fetchComments}
            ></CommentCard>
          );
        })}
      </div>
    );
  }
};
export default PostCommentsPage;
