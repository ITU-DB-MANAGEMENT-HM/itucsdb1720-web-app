// Page link icons.

// Import pages here
import NoMatch from "./pages/no-match";
import Main from "./pages/main";
import StudyGroups from "./pages/study-groups";
import Departments from "./pages/departments"
import Homeworks from './pages/homeworks'
import Chatgroups from './pages/chatgroups'
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
    },
    {
      path: "/lecturers",
      Component: Departments,
      icon: "team",
      isPrivate: false,
      title: "Lecturers",
      isSystem: true

    },
    {
      path: "/homeworks",
      Component: Homeworks,
      icon : "book",
      isPrivate: false,
      title: "Homeworks",
      isSystem: true

    },
    {
      path: "/chatgroups",
      Component: Chatgroups,
      icon: "message",
      isPrivate: false,
      title: "Chatgroups",
      isSystem: true
    }
    

  ]
};
