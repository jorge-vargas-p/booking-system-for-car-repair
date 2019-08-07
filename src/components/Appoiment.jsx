import React from 'react';
import PropTypes from 'prop-types';

const Appoiment = ({ appoiment, deleteAppoiment }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{appoiment.owner}</h3>
      <p className="card-text">
        <span>Brand: </span>
        {appoiment.brand}
      </p>
      <p className="card-text">
        <span>Plate Number: </span>
        {appoiment.plateNumber}
      </p>
      <p className="card-text">
        <span>Date: </span>
        {appoiment.date}
      </p>
      <p className="card-text">
        <span>Time: </span>
        {appoiment.time}
      </p>
      <p className="card-text">
        <span>Issue: </span>
      </p>
      <p className="card-text">{appoiment.issue}</p>
      <button
        className="btn btn-danger"
        onClick={() => deleteAppoiment(appoiment.id)}
      >
        Delete &times;
      </button>
    </div>
  </div>
);

Appoiment.propTypes = {
  appoiment: PropTypes.object.isRequired,
  deleteAppoiment: PropTypes.func.isRequired
};

export default Appoiment;
