import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage from "./pages/JobPage";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/Default";

const router=createBrowserRouter(
createRoutesFromElements(
<Route path='/' element={<MainLayout/>} >
<Route index element={<HomePage/>}/>
<Route path="/jobs" element={<JobsPage/>}/>
<Route path="/jobs/:id" element={<JobPage/>}/>
<Route path="*" element={<NotFound/>}/>

</Route>
)
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App