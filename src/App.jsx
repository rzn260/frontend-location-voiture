import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomerRentals from "./pages/CustomerRentals";
import AdminDashboard from "./pages/AdminDashboard";
import ManageCars from "./pages/ManageCars";
import ManageCategories from "./pages/ManageCategories";
import ManageCustomers from "./pages/ManageCustomers";
import ManageRentals from "./pages/ManageRentals";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/protectedRoute";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-rentals" element={<CustomerRentals />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/cars" element={<ManageCars />} />
          <Route path="/admin/categories" element={<ManageCategories />} />
          <Route path="/admin/customers" element={<ManageCustomers />} />
          <Route path="/admin/rentals" element={<ManageRentals />} />
          <Route path="/admin"
          element ={ <ProtectedRoute role='admin'><AdminDashboard/></ProtectedRoute>} />
          <Route path="/admin/cars" element ={<ManageCars/>} />
          <Route path="/admin/categories" element={ <ManageCategories/>}/>
          <Route path="/admin/customers" element={ <ManageCustomers/>}/>
          <Route path="/admin/Rentals" element={ <ManageRentals/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
