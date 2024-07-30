import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Layots from "./pages/Layots";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleBlog from "./pages/SingleBlog";
import CreateBlog from "./pages/CreateBlog";
import MyBlogs from "./pages/MyBlogs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layots />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="create" element={<CreateBlog />} />
      <Route path="my-blogs" element={<MyBlogs />} />
      <Route path="/:id" element={<SingleBlog />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
