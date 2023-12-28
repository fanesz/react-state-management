import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <header>{/* <Navbar /> */}</header>
      <main>
        <Outlet />
      </main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
}
