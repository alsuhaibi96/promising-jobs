
import { useState, useEffect } from 'react'
import Job from './Job'
import PropTypes from 'prop-types'
import Spinner from './Spinner'

const JobList = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                if(data.jobs&&Array.isArray(data.jobs)){
                    setJobs(data.jobs);
                }
            }
            catch (error) {
                console.log("error in fetching jobs", error)
            }
            finally {
                setLoading(false)

            }
        };
        fetchJobs();
    }, [])

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
                    {
                        isHome ? 'Recent jobs' : 'Browse Jobs'

                    }
                </h2>

                {
                    loading ?
                        (
                            <Spinner loading={loading} />
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {
                                    jobs.map((job) => (
                                        <Job key={job.id} job={job} />
                                    ))
                                }
                            </div>

                        )
                }

            </div>
        </section>
    )
}
JobList.propTypes = {
    isHome: PropTypes.bool
}

export default JobList