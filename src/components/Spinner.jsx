import { PropTypes } from "prop-types"
import { ClipLoader } from "react-spinners"

const override ={
    display:'block',
    margin:'100px auto'
}
const Spinner = ({loading}) => {
  return (
    <ClipLoader
    color='blue'
    loading={loading}
    cssOverride={override}
    size={150}
    />

  )
}

Spinner.propTypes={
    loading:PropTypes.bool
}

export default Spinner