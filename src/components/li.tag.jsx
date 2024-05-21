import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LiTag({ destination, label }) {
  return (
    <li className="nav-item">
      {/* <Link className="nav-link active" aria-current="page" href={ destination }>{ label }</Link> */}
      <Link className="nav-link active" aria-current="page" to={ destination }>{ label }</Link>
    </li>
  )
}

LiTag.propTypes = {
  label: PropTypes.string,
  destination: PropTypes.string
}

export default LiTag