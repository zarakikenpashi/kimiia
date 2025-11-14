import { Route, Routes } from "react-router"
import { AuthLayout } from "./components/AuthLayout"
import { Layout } from "./components/Layout"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Register } from "./pages/Register"
import { ServiceClient } from "./pages/ServiceClient"
import { Voyager } from "./pages/Voyager"
import { Trajet } from "./pages/Trajet"
import { Partenaire } from "./pages/Partenaire"

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="voyager" element={<Voyager />} />
        <Route path="serviceclient" element={<ServiceClient />} />
        <Route path="trajet" element={<Trajet />} />
        <Route path="partenaire" element={<Partenaire />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="connexion" element={<Login />} />
        <Route path="inscription" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
