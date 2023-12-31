import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import NotFound from "../../pages/notFound/NotFound";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ResetPassword from "../../pages/resetPassword/ResetPassword";
import Contact from "../../pages/contact/Contact";
import About from "../../pages/about/About";
import AllProduct from "../../pages/allProduct/AllProduct";
import ProductDetails from "../../pages/productDetails/ProductDetails";
import Blogs from "../../pages/blog/Blogs";
import BlogDetails from "../../pages/blogDetails/BlogDetails";
import Cart from "../../pages/cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <AllProduct />,
        loader: () => fetch("http://localhost:5000/totalProducts"),
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs />,
        loader: () => fetch("http://localhost:5000/totalBlogs"),
      },
      {
        path: "blog-details/:id",
        element: <BlogDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`),
      },
      {
        path: "cart",
        element: <Cart />,
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "reset",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
