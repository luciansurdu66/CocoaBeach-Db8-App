import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateDebater extends Component{
  constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeClub = this.onChangeClub.bind(this);
    this.onChangeCVPoints = this.onChangeCVPoints.bind(this);
    this.onChangeGame1 = this.onChangeGame1.bind(this);
    this.onChangeGame2 = this.onChangeGame2.bind(this);
    this.onChangeGame3 = this.onChangeGame3.bind(this);
    this.onChangeGame4 = this.onChangeGame4.bind(this);

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

  componentDidMount(){
    axios.get('http://localhost:5000/debaters/')
      .then(response => {
        if(response.data.length > 0){
          this.setState({
            debaters: response.data.map(debater => debater.name),
            name: response.data[0].name
          })
        }
      })
  }
}

// export default class CreateExercise extends Component {
  

//   componentDidMount() {
//     axios.get('http://localhost:5000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           this.setState({
//             users: response.data.map(user => user.username),
//             username: response.data[0].username
//           })
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//   }

//   onChangeUsername(e) {
//     this.setState({
//       username: e.target.value
//     })
//   }

//   onChangeDescription(e) {
//     this.setState({
//       description: e.target.value
//     })
//   }

//   onChangeDuration(e) {
//     this.setState({
//       duration: e.target.value
//     })
//   }

//   onChangeDate(date) {
//     this.setState({
//       date: date
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const exercise = {
//       username: this.state.username,
//       description: this.state.description,
//       duration: this.state.duration,
//       date: this.state.date
//     }

//     console.log(exercise);

//     axios.post('http://localhost:5000/exercises/add', exercise)
//       .then(res => console.log(res.data));

//     window.location = '/';
//   }

//   render() {
//     return (
//     <div>
//       <h3>Create New Exercise Log</h3>
//       <form onSubmit={this.onSubmit}>
//         <div className="form-group"> 
//           <label>Username: </label>
//           <select ref="userInput"
//               required
//               className="form-control"
//               value={this.state.username}
//               onChange={this.onChangeUsername}>
//               {
//                 this.state.users.map(function(user) {
//                   return <option 
//                     key={user}
//                     value={user}>{user}
//                     </option>;
//                 })
//               }
//           </select>
//         </div>
//         <div className="form-group"> 
//           <label>Description: </label>
//           <input  type="text"
//               required
//               className="form-control"
//               value={this.state.description}
//               onChange={this.onChangeDescription}
//               />
//         </div>
//         <div className="form-group">
//           <label>Duration (in minutes): </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={this.state.duration}
//               onChange={this.onChangeDuration}
//               />
//         </div>
//         <div className="form-group">
//           <label>Date: </label>
//           <div>
//             <DatePicker
//               selected={this.state.date}
//               onChange={this.onChangeDate}
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//     )
//   }
// }