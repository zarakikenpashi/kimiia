import { Outlet } from "react-router"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
