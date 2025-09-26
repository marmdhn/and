import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routesConfig";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <Routes>
      {routes.map(({ path, element, useDefaultLayout }) => (
        <Route
          key={path}
          path={path}
          element={useDefaultLayout ? <Layout>{element}</Layout> : element}
        />
      ))}
    </Routes>
  );
}

export default App;
