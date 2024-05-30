import PropTypes from 'prop-types'
import { useState } from 'react'
import {FaMapMarker} from 'react-icons/fa'

const Job = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = job.description;

    if (!showFullDescription) {
        description = description.substring(0, 90) + ' ...';
    }
    return (
        <div className="bg-white rounded-xl shadow-md relative" key={job.id}>
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{job.type}</div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                </div>

                <div className="mb-5">
                    {
                        description
                    }                  </div>

                <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-blue-500 mb-5 hover:text-blue-700">
                    {showFullDescription ? 'Less' : 'More'}
                </button>

                <h3 className="text-blue-500 mb-2">{job.salary}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                    <FaMapMarker className='text-orange-700 mr-2 inline mb-1'/>
                        {job.location}
                    </div>
                    <a
                        href={`/job${job.id}`}
                        className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}
Job.propTypes = {
    job: PropTypes.object
}
export default Job