import PropTypes from 'prop-types'

const Card = ({ children, bg = 'bg-gray-100' }) => {
    return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
  };

  Card.propTypes={
    children:PropTypes.node,
    bg:PropTypes.string,
  }
  export default Card;