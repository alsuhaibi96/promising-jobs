import jobs from '../jobs.json'
import Job from './Job'


const JobList = () => {
    const recentJobs=jobs.slice(0,3)

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        recentJobs.map((job) => (
                         <Job key={job.id} job={job}/>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default JobList