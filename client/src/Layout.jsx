import { NavLink, Outlet } from "react-router";
import Cart from "./components/Cart";

export default function Layout() {
  return <>
    <header>
      <nav>
        <Navlink to={"/"}>Home</Navlink>
      </nav>
    </header>
    <main>
      <Outlet />
      <Cart />
    </main>
  </>
}