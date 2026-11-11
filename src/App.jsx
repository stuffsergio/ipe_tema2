import { Route, Routes } from "react-router-dom";
import Shell from "./Shell.jsx";
import Home from "./pages/Home.jsx";
import Temario from "./pages/Temario.jsx";
import Modulo from "./pages/Modulo.jsx";
import Cuestionarios from "./pages/Cuestionarios.jsx";
import Quiz from "./pages/Quiz.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<Home />} />
        <Route path="/temario" element={<Temario />} />
        <Route path="/temario/:id" element={<Modulo />} />
        <Route path="/cuestionarios" element={<Cuestionarios />} />
        <Route path="/cuestionarios/:id" element={<Quiz />} />
      </Route>
    </Routes>
  );
}
