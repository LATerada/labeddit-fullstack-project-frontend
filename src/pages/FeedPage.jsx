import { useState } from "react";
import { useEffect } from "react";
import { PostCard } from "../components/PostCard";
import UserService from "../services/user.service";
import { Button } from "../components/Button";
import { useForm } from "../hooks/useForm";
import { TextArea } from "../components/TextArea";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [isPostValid, setIsPostValid] = useState(true);
  const [newPost, setNewPost] = useState(false);
  // const [newLikeOrDislikePost, setNewLikeOrDislikePost] = useState(false);
  const [textAreaErrorMessage, setTextAreaErrorMessage] = useState(
    "Posts need to have at least 1 caracter."
  );
  const token = localStorage.getItem("token");
  localStorage.getItem("token");
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

    setIsPostValid(/.{1}/.test(form.postContent));

    if (/.{1}/.test(form.postContent)) {
      const response = await UserService.createPost(headers, body);

      setNewPost(true);
    }
    setIsPosting(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [newPost]);

  // console.log(isPostValid);

  if (isLoaded) {
    return (
      <div className="grid justify-center w-full pb-8">
        <form onSubmit={onSubmit}>
          <TextArea
            name="postContent"
            type="text"
            value={form.password}
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
              // setNewLikeOrDislikePost={setNewLikeOrDislikePost}
            ></PostCard>
          );
        })}
      </div>
    );
  }
};
export default FeedPage;
