import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditDebater extends Component {
  constructor(props) {
    super(props);

    
  }

  componentDidMount() {
    axios.get('http://localhost:5000/debaters/'+this.props.match.params.id)
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

  onChangeGame1(date) {
    this.setState({
      game1: date
    })
  }
  onChangeGame2(date) {
    this.setState({
      game2: date
    })
  }
  onChangeGame3(date) {
    this.setState({
      game3: date
    })
  }
  onChangeGame4(date) {
    this.setState({
      game4: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

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

    axios.post('http://localhost:5000/debaters/update/' + this.props.match.params.id, debater)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Debater Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
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
    )
  }
}