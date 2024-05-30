
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Jobs from '../components/JobList'
import ViewAllJobs from '../components/ViewAllJobs'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <Cards/>
    <Jobs isHome={true}/>
    <ViewAllJobs/>
    <Testimonials/>
    </>
  )
}

export default HomePage