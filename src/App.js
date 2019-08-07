import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewBooking from './components/NewBooking';
import BookingList from './components/BookingList';

class App extends Component {
  state = {
    appoiments: []
  };

  // when the App load
  componentDidMount() {
    const appoimentsLS = localStorage.getItem('appoiments');
    if (appoimentsLS) {
      this.setState({
        appoiments: JSON.parse(appoimentsLS)
      });
    }
  }
  // when delete or add a new appoiment
  componentDidUpdate() {
    localStorage.setItem('appoiments', JSON.stringify(this.state.appoiments));
  }

  createNewAppoiment = (data) => {
    //copy the current state
    const appoiments = [...this.state.appoiments, data];

    //add new state
    this.setState({
      appoiments
    });
  };

  // Delete appoiment from the state

  deleteAppoiment = (id) => {
    // taking a copy  of the state
    const currentAppoiments = [...this.state.appoiments];

    //Using .filter to take the @ID element from the array
    const appoiments = currentAppoiments.filter(
      (appoiment) => appoiment.id !== id
    );

    // Updating state
    this.setState({
      appoiments
    });
  };

  render() {
    return (
      <div className="container">
        <Header title="BOOKING ADMINISTRATOR SYSTEM" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewBooking createNewAppoiment={this.createNewAppoiment} />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <BookingList
              appoiments={this.state.appoiments}
              deleteAppoiment={this.deleteAppoiment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
