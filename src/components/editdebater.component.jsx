import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
export default class EditDebater extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeClub = this.onChangeClub.bind(this);
    this.onChangeCvpoints = this.onChangeCvpoints.bind(this);
    this.onChangeGame1 = this.onChangeGame1.bind(this);
    this.onChangeGame2 = this.onChangeGame2.bind(this);
    this.onChangeGame3 = this.onChangeGame3.bind(this);
    this.onChangeGame4 = this.onChangeGame4.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      club: '',
      cvpoints: 0,
      game1: 0,
      game2: 0,
      game3: 0,
      game4: 0
    }
    
  }

  
  

  componentDidMount() {
    const path = window.location.pathname;
    const variables = path.split("/");
    const id = variables[variables.length - 1];
    axios.get(`http://localhost:5000/debaters/${id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          club: response.data.club,
          cvpoints: response.data.cvpoints,
          game1: response.data.game1,
          game2: response.data.game2,
          game3: response.data.game3,
          game4: response.data.game4
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeClub(e) {
    this.setState({
      club: e.target.value
    })
  }

  onChangeCvpoints(e) {
    this.setState({
      cvpoints: e.target.value
    })
  }

  onChangeGame1(e) {
    this.setState({
      game1: e.target.value
    })
  }
  onChangeGame2(e) {
    this.setState({
      game2: e.target.value
    })
  }
  onChangeGame3(e) {
    this.setState({
      game3: e.target.value
    })
  }
  onChangeGame4(e) {
    this.setState({
      game4: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const path = window.location.pathname;
    const variables = path.split("/");
    const id = variables[variables.length - 1];
    const debater = {
      name: this.state.name,
      club: this.state.club,
      cvpoints: this.state.cvpoints,
      game1: this.state.game1,
      game2: this.state.game2,
      game3: this.state.game3,
      game4: this.state.game4

    }

    console.log(debater);

    axios.post(`http://localhost:5000/debaters/update/${id}` , debater)
      .then(res => console.log(res.data));
    window.location = '/debaters/log';
  }

  render() {
    return (
      <>
      <div className='container'>
        <h3>Edit Debater Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Name: </label>
            <input type="text"
                   required
                   className='form-control'
                   value={this.state.name}
                   onChange={this.onChangeName}
                  />
          </div>
          <div className="form-group"> 
            <label>Club: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.club}
                onChange={this.onChangeClub}
                />
          </div>
          <div className="form-group">
            <label>Cvpoints: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.cvpoints}
                onChange={this.onChangeCvpoints}
                />
          </div>
          <div>
            <label>Game 1: </label>
            <input type="text"  
                  className='form-control'
                  value={this.state.game1}
                  onChange={this.onChangeGame1}
                  />
          </div>
          <div>
            <label>Game 2: </label>
            <input type="text"  
                  className='form-control'
                  value={this.state.game2}
                  onChange={this.onChangeGame2}
                  />
          </div>
          <div>
            <label>Game 3: </label>
            <input type="text"  
                  className='form-control'
                  value={this.state.game3}
                  onChange={this.onChangeGame3}
                  />
          </div>
          <div>
            <label>Game 4: </label>
            <input type="text"  
                  className='form-control'
                  value={this.state.game4}
                  onChange={this.onChangeGame4}
                  />
          </div>
          <div className="form-group">
            <input type="submit" value="Edit Debater Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
      </>
    )
  }
}