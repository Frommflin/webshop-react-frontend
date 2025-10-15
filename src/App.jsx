import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
