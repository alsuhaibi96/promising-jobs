import Card from './Card'
import {Link} from 'react-router-dom'

const Cards = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card bg='bg-gray-100'>
        <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            Browse our Promising Jobs and start your career today
          </p>
          <Link
            to="/jobs"
            className="inline-block bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-300"
          >
            Browse Jobs
          </Link>
        </Card>
       <Card bg='bg-indigo-100'>
       <h2 className="text-2xl font-bold">For Employers</h2>
          <p className="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <Link
            to="/add-job"
            className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
          >
            Add Job
          </Link>
       </Card>
      </div>
    </div>
  </section>
  )
}

export default Cards