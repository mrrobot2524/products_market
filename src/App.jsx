import { Outlet } from "react-router-dom";
import Navigation from "./components/UI/Navigation/Navigation";

function App() {
  return (
    <div className="container m-auto">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
