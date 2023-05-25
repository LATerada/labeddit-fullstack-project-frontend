import { useState } from "react";
import { useEffect } from "react";
import { PostCard } from "../components/PostCard";
import { Button } from "../components/Button";
import { useForm } from "../hooks/useForm";
import { TextArea } from "../components/TextArea";
import UserService from "../services/userService";
import ValidationService from "../services/validationService";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [isPostValid, setIsPostValid] = useState(true);
  const [newPost, setNewPost] = useState(false);
  const textAreaErrorMessage =  "Posts need to have at least 1 caracter."
 
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const { form, onChangeInputs, clearInputs } = useForm({
    postContent: "",
  });
  const body = {
    content: form.postContent,
  };

  const fetchPosts = async () => {
    const response = await UserService.getPosts(headers);
    setIsLoaded(true);
    setPosts(response);
  };

  const onSubmit = async (event) => {
    setIsPosting(true);
    event.preventDefault();

    setIsPostValid(ValidationService.postValidation(form.postContent));

    if (ValidationService.postValidation(form.postContent)) {
      await UserService.createPost(headers, body);
      clearInputs();
      setNewPost(true);
    }
    setIsPosting(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [newPost]);

  if (isLoaded) {
    return (
      <div className="grid justify-items-center content-center w-full pb-8">
        <form onSubmit={onSubmit}>
          <TextArea
            name="postContent"
            type="text"
            value={form.postContent}
            onChange={onChangeInputs}
            placeholder="Write your post..."
            isValid={isPostValid}
          ></TextArea>
          {isPostValid ? (
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
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              post={post}
              headers={headers}
              fetchPosts={fetchPosts}
            ></PostCard>
          );
        })}
      </div>
    );
  }
};
export default FeedPage;
