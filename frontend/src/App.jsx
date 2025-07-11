import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from './components/Home'
// import Chat from './components/Chat'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef } from "react";

// Layout to conditionally apply background based on route
function Layout() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;

    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.11,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    return () => {
      scrollRef.current?.destroy();
    };
  }, []);

  const location = useLocation();
  const onAuth = location.pathname === "/" || location.pathname === "/Login";

  useEffect(() => {
    if (scrollRef.current && typeof scrollRef.current.update === "function") {
      scrollRef.current.update();
    }
  }, [location.pathname]);

  return (
    <div
      className="AppContainer"
      data-scroll-container
      id={onAuth ? "onAuth" : "notOnAuth"}
      ref={containerRef}
    >
      <Outlet />
    </div>
  );
}

// Define routes with Layout as the parent
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path:'/Home',
        element:<Home />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;