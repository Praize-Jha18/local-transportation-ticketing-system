import PropTypes from 'prop-types';

function LiTag({ destination, label }) {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href={ destination }>{ label }</a>
    </li>
  )
}

LiTag.propTypes = {
  label: PropTypes.string,
  destination: PropTypes.string
}

export default LiTag