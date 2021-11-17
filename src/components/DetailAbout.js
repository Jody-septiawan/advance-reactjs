// import package for property types
import PropTypes from 'prop-types';

// create component here
const DetailAbout = (props) => {
  return (
    <>
      <h1>Title: {props.title}</h1>
      <p>Summary: {props.summary}</p>
      <p>Total guest: {props.total}</p>
    </>
  );
};

// define property type for this component here
DetailAbout.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  total: PropTypes.bool,
};

export default DetailAbout;
