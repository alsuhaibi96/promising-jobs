import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/Default";

const router=createBrowserRouter(
createRoutesFromElements(
<Route path='/' element={<MainLayout/>} >
<Route index element={<HomePage/>}/>
</Route>
)
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App