export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToSignupPage = (navigate) => {
  navigate("/signup");
};

export const goToFeedPage = (navigate) => {
  navigate("/feed");
};

export const goToPostCommentsPage = (navigate, id) => {
  navigate(`/post/${id}/comments`);
};
