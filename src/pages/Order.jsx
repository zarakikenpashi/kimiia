import { Filtre } from "../components/Filtre";
import { Header } from "../components/Header";
import { Results } from "../components/Results";

export const Order = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl p-6">
        <Filtre />
        <Results />
      </div>
    </>
  )
}