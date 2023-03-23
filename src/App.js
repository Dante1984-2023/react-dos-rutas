import Navegar  from "./Componentes/Navegar";
/* importamos las rutas y el match a la ruta */

import{
  Routes,
  Route
} from 'react-router-dom';


import Home from "./Componentes/Home";
import Productos from "./Componentes/Productos";
import Formulario from "./Componentes/Formulario";
import About from "./Componentes/About";
import Api from "./Componentes/Api";
import Error from "./Componentes/Error";
import Footer from "./Componentes/Footer";






function App() {
  return (
<>

    <Navegar />
    {/* Paso 5: configuramos las rutas */}

    <Routes>
      <Route index element={<Home />}></Route>  {/* Cuando inicie la pagina empiece con Home */}
     <Route path="/productos" element={<Productos />}></Route>
     <Route path="/formulario" element={<Formulario />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/api" element={<Api />}></Route>
     <Route path="*" element={<Error />}></Route>

    </Routes>
    <Footer />

    </>
  );
}

export default App;
