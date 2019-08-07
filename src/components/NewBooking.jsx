import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const initialState = {
  appoiment: {
    owner: '',
    brand: '',
    plateNumber: '',
    date: '',
    time: '',
    issue: ''
  },
  error: false
};

class NewBooking extends Component {
  state = { ...initialState };
  //when the user write in the inputs
  handleChange = (e) => {
    // console.log(e.target.name + ': ' + e.target.value);

    //writting the information of the user in the state
    this.setState({
      appoiment: {
        ...this.state.appoiment,
        [e.target.name]: e.target.value
      }
    });
  };

  //when the user send the form
  handleSubmit = (e) => {
    e.preventDefault();

    //extracting the values of the state

    const {
      owner,
      brand,
      plateNumber,
      date,
      time,
      issue
    } = this.state.appoiment;

    //validate that all fields are filled

    if (
      owner === '' ||
      brand === '' ||
      plateNumber === '' ||
      date === '' ||
      time === '' ||
      issue === ''
    ) {
      this.setState({
        error: true
      });
      // stop execution
      return;
    }

    //generating a new object with data
    const newAppoiment = { ...this.state.appoiment };
    newAppoiment.id = uuid();

    //Add the appointment to the state of App
    this.props.createNewAppoiment(newAppoiment);

    //put in the state the initialState
    this.setState({
      ...initialState
    });
  };

  render() {
    //extracting value state
    const { error } = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Fill the form to create a new appoiment
          </h2>
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Please complete all required fields.
            </div>
          ) : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Owner</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="owner"
                  onChange={this.handleChange}
                  value={this.state.appoiment.owner}
                />
              </div>
            </div>

            {/*Form group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Brand / Model
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Brand"
                  name="brand"
                  onChange={this.handleChange}
                  value={this.state.appoiment.brand}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Plate Number
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Plate Number"
                  name="plateNumber"
                  onChange={this.handleChange}
                  value={this.state.appoiment.plateNumber}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.appoiment.date}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  placeholder="Plate Number"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.appoiment.time}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Issues Description
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="issue"
                  placeholder="Describe Issue"
                  onChange={this.handleChange}
                  value={this.state.appoiment.issue}
                />
              </div>
            </div>
            <input
              type="submit"
              className="py-3 mt-2 btn btn-succes btn-block"
              value="Add New Appoiment"
            />
          </form>
        </div>
      </div>
    );
  }
}
NewBooking.propTypes = {
  createNewAppoiment: PropTypes.func.isRequired
};

export default NewBooking;
