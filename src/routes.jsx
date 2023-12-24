import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { Home,Farmers,Groups,Fieldofficers,Reports } from "@/pages/dashboard";
import { SignIn, SignUp,ChangePassword } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    title: "Main Menu",
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "fieldofficer",
        path: "/fieldofficers",
        element: <Fieldofficers />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "reports",
        path: "/reports",
        element: <Reports />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "farmers",
        path: "/farmers",
        element: <Farmers />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "groups",
        path: "/groups",
        element: <Groups />,
      },
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ServerStackIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <RectangleStackIcon {...icon} />,
  //       name: "sign up",
  //       path: "/sign-up",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
