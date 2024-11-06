import { Outlet } from "react-router-dom"
import Header from "../../components/Header"

const Default = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default Default