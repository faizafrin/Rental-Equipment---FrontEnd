import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Equipment from "./Pages/Equipment";
import Driller from "./Components/Driller";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Pop from "./Components/Pop";
import Cart from "./Pages/Cart";
import Admin from "./Pages/Admin";
import { UserProvider } from "./UserContext";
import AddEquipment from "./Components/AddEquipment";
import EditEquipment from "./Components/EditEquipment";
import NotFound from "./Components/NotFound";
import OrdersPage from "./Pages/OrdersPage";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/equipment" element={<Equipment />}>
            <Route index element={<Driller />} />
            <Route path="driller/:id" element={<Pop />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addEquipment" element={<AddEquipment />} />
          <Route path="/editEquipment/:id" element={<EditEquipment />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/order" element={<OrdersPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;