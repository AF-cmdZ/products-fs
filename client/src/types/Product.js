import PropTypes from "prop-types";

export default {
  _id: PropTypes.string,
  price: PropTypes.string.isRequired,
  stocked: PropTypes.bool,
  name: PropTypes.string.isRequired,
};
