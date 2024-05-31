import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner";

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = res.json()
                setJob(data)
            }
            catch(job) {
             console.log("error in fetching a job",job)
            }
            finally {
            setLoading(false)
            }
        };

        fetchJobs();
    },[]);
    return (
        <div>JobPage</div>
    )
}

export default JobPage