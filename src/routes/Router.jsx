import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import PostCommentsPage from "../pages/PostCommentsPage";
import SignupPage from "../pages/SignupPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="/feed" element={<FeedPage></FeedPage>}></Route>
        <Route
          path="/post/:id/comments"
          element={<PostCommentsPage></PostCommentsPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
