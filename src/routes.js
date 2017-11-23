// Page link icons.

// Import pages here
import NoMatch from "./pages/no-match";
import Main from "./pages/main";

export default {
  noAuthRedirect: null,
  NoMatch,
  index: "/",
  routes: [
    {
      path: "/main",
      Component: Main,
      isPrivate: false,
      title: "Main",
      isSystem: true
    }
  ]
};
