import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateDebater extends Component{
  constructor(props){
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeClub = this.onChangeClub.bind(this);
    this.onChangeCVPoints = this.onChangeCVPoints.bind(this);
    this.onChangeGame1 = this.onChangeGame1.bind(this);
    this.onChangeGame2 = this.onChangeGame2.bind(this);
    this.onChangeGame3 = this.onChangeGame3.bind(this);
    this.onChangeGame4 = this.onChangeGame4.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      club: '',
      cvpoints: 0,
      game1: 0,
      game2: 0,
      game3: 0,
      game4: 0
    }
  }

  onChangeFirstname(e){
    this.setState({
      firstname: e.target.value
    });
  }

  onChangeLastname(e){
    this.setState({
      lastname: e.target.value
    });
  }

  onChangeClub(e){
    this.setState({
      club: e.target.value
    });
  }

  onChangeCVPoints(e){
    this.setState({
      cvpoints: e.target.value
    });
  }

  onChangeGame1(e){
    this.setState({
      game1: e.target.value
    });
  }

  onChangeGame2(e){
    this.setState({
      game2: e.target.value
    });
  }

  onChangeGame3(e){
    this.setState({
      game3: e.target.value
    });
  }

  onChangeGame4(e){
    this.setState({
      game4: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
    const debater = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      club: this.state.club,
      cvpoints: this.state.cvpoints,
      game1: this.state.game1,
      game2: this.state.game2,
      game3: this.state.game3,
      game4: this.state.game4
    }

    console.log(debater);

    axios.post('http://localhost:5000/debaters/add', debater)
      .then(res => console.log(res.data));

    window.location = '/debaters/log';
  }

  render(){
    return (
      <div className='container'>
        <h3>Create New Debater</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Firstname: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangeFirstname}
              />
          </div>
          <div className='form-group'>
            <label>Lastname: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastname}
              />
          </div>
          <div className="form-group">
            <label>Club: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.club}
              onChange={this.onChangeClub}
              />
          </div>
          <div className="form-group">
            <label>CV Points: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.cvpoints}
              onChange={this.onChangeCVPoints}
              />
          </div>
          <div className="form-group">
            <label>Game 1: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.game1}
              onChange={this.onChangeGame1}
              />
          </div>
          <div className="form-group">
            <label>Game 2: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.game2}
              onChange={this.onChangeGame2}
              />
          </div>
          <div className="form-group">
            <label>Game 3: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.game3}
              onChange={this.onChangeGame3}
              />
          </div>
          <div className="form-group">
            <label>Game 4: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.game4}
              onChange={this.onChangeGame4}
              />
          </div>
          <br />
          <div className="form-group">
            <input type="submit" value="Create Debater Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )

}
}