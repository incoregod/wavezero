import { useRoutes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Produtos from "./Pages/Produtos/Produtos";
import Servicos from "./Pages/Servicos/Servicos";
import Sobre from "./Pages/Sobre/Sobre";
import Contactos from "./Pages/Contactos/Contactos";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
function App() {
  const element = useRoutes([
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Produtos />,
      path: "/produtos",
    },
    {
      element: <Servicos />,
      path: "/servicos",
    },
    {
      element: <Sobre />,
      path: "/sobre-nos",
    },
    {
      element: <Contactos />,
      path: "/contactos",
    },
  ]);
  //  lg:bg-green-500 xl:bg-red-500 2xl:bg-purple-600
  return (
    <div className="dark:bg-fundo bg-gray-50 bg-header-pattern  bg-no-repeat bg-fill bg-start max-md:bg-contain gray ">
      <NavBar />
      {element}
      <Footer />
    </div>
  );
}

export default App;
