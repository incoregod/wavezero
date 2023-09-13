// import { useParallax } from "react-scroll-parallax";
// import { Parallax } from 'react-scroll-parallax';
//<Parallax translateY={[-20, 20]}>
import { useRoutes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Produtos from "./Pages/Produtos/Produtos";
import Servicos from "./Pages/Servicos/Servicos";
import Sobre from "./Pages/Sobre/Sobre";
import Contactos from "./Pages/Contactos/Contactos";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
function App() {
  // const { ref } = useParallax({ speed: 10, translateY: [-20, 20] });
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
    <div className="bg-cyan-900 dark:bg-gray-950 ">
      <NavBar />
      {element}
      <Footer />
    </div>
  );
}

export default App;
