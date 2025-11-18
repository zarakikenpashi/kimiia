import { Route, Routes } from "react-router"
import { AuthLayout } from "./components/AuthLayout"
import { Layout } from "./components/Layout"

import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { ServiceClient } from "./pages/ServiceClient"
import { Voyager } from "./pages/Voyager"
import { Trajet } from "./pages/Trajet"
import { Partenaire } from "./pages/Partenaire"
import { Order } from "./pages/Order"

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="voyager" element={<Voyager />} />
        <Route path="serviceclient" element={<ServiceClient />} />
        <Route path="trajet" element={<Trajet />} />
        <Route path="partenaire" element={<Partenaire />} />
        <Route path="order" element={<Order />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="connexion" element={<Login />} />
        <Route path="inscription" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
