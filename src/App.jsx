//* ROUTER IMPORTS
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

//* COMPONENTS IMPORTS
import { Navbar, Footer } from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;