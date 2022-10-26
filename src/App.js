import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Order from "./routes/Order";
import Home from "./routes/Home";
import Options from "./routes/Options";
import Confirm from "./routes/Confirm";
import Payment from "./routes/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/options" element={<Options />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
