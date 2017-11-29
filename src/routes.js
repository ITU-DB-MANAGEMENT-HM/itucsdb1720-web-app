// Page link icons.

// Import pages here
import NoMatch from "./pages/no-match";
import Main from "./pages/main";
import StudyGroups from "./pages/study-groups";
export default {
  noAuthRedirect: null,
  NoMatch,
  index: "/",
  routes: [
    {
      path: "/",
      Component: Main,
      icon: "home",
      isPrivate: false,
      title: "Main",
      isSystem: true
    },
    {
      path: "/studygroups",
      Component: StudyGroups,
      icon: "team",
      isPrivate: false,
      title: "Study Groups",
      isSystem: true
    }
  ]
};
