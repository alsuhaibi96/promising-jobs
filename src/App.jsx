import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/Default";
import EditJobPage from "./pages/EditJobPage";



const App = () => {
  //add new job
  const addJob = async (newJob) => {
    await fetch('/api/jobs',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });
    return;
  }

  //update job
  const updateJob = async (job) => {
    await fetch(`/api/jobs/${job.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });
    return;
  }


  //delete job
  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`,
      {
        method: 'DELETE',
      });
    return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="/jobs/:id" loader={jobLoader} element={<JobPage deleteJob={deleteJob} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />

      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App