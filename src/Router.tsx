import { Route, Routes } from "react-router-dom"
import Default from "./layouts/Default"
import Home from "./pages/Home"
import Post from "./pages/Post"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}

export default Router