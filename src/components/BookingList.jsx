import React from 'react';
import Appoiment from './Appoiment';
import PropTypes from 'prop-types';

const BookingList = ({ appoiments, deleteAppoiment }) => {
  //print a message deppending of bookings
  const message =
    Object.keys(appoiments).lenght === 0
      ? 'No appoiments for today'
      : 'Manage the booking here';

  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{message}</h2>

        <div className="booking-list">
          {appoiments.map((appoiment) => (
            <Appoiment
              key={appoiment.id}
              appoiment={appoiment}
              deleteAppoiment={deleteAppoiment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

BookingList.propTypes = {
  appoiments: PropTypes.array.isRequired,
  deleteAppoiment: PropTypes.func.isRequired
};

export default BookingList;
