import HomePage from "../pages/HomePage";
import AutoExplorePage from "../pages/AutoExplorePage.tsx";
import RegistrationPage from "../pages/RegistrationPage.tsx";
export const privateRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "Visualizar",
    element: <AutoExplorePage />,
  },
  {
    path: "Cadastrar",
    element: <RegistrationPage />,
  },
];

export const publicRoutes = [
  {
    path: "/signin",
    element: null,
  },
];
