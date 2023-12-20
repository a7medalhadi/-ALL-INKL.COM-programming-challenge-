import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

const App = () => (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
)

export default App;
