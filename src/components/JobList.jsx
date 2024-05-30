import jobs from '../jobs.json'
import Job from './Job'
import PropTypes from 'prop-types'


const JobList = ({isHome=false}) => {
    const allJobs= isHome ? jobs.slice(0,3) :jobs

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
                {
                  isHome?  'Recent jobs' :'Browse Jobs'

                }
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        allJobs.map((job) => (
                         <Job key={job.id} job={job}/>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}
JobList.propTypes={
    isHome:PropTypes.bool
}

export default JobList