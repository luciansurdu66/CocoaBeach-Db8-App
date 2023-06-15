import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Debater = props => (
  <tr>
    <td>{props.debater.firstname}</td>
    <td>{props.debater.lastname}</td>
    <td>{props.debater.club}</td>
    <td>{props.debater.cvpoints}</td>
    <td>{props.debater.game1}</td>
    <td>{props.debater.game2}</td>
    <td>{props.debater.game3}</td>
    <td>{props.debater.game4}</td>
    <td>
      <Link className="btn btn-secondary thead-light" to={"/debaters/update/"+props.debater._id}>edit</Link>  <a className= "btn btn-danger" href="#" onClick={() => { props.deleteDebater(props.debater._id) }}>delete</a>
    </td>
  </tr>
)

export default class DebaterList extends Component {
  constructor(props) {
    super(props);

    this.deleteDebater = this.deleteDebater.bind(this)

    this.state = {debater: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/debaters/')
      .then(response => {
        this.setState({ debater: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteDebater(id) {
    axios.delete('http://localhost:5000/debaters/delete/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      debater: this.state.debater.filter(el => el._id !== id)
    })
  }


  debaterList() {
    return this.state.debater.map(currentdebater => {
      return <Debater debater={currentdebater} deleteDebater={this.deleteDebater} key={currentdebater._id}/>;
    })
  }

  render() {
    return (
      <>
      <div className="container">
        <table className='table'> 
          <thead className='thead-light'>
            <tr className='table'>
              <th><h3>Logged Debaters</h3></th>
              <th><br /></th>
              <th><br /></th>
              <th><br /></th>
              <th><br /></th>
              <th><br /></th>
              <th><br /></th>
              <th><br /></th>
              <th><Link className="btn btn-secondary" to={"/debaters/create/"}>Create</Link></th>
            </tr>
          </thead>
        </table>
        
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Club</th>
              <th>Cvpoints</th>
              <th>Game1</th>
              <th>Game2</th>
              <th>Game3</th>
              <th>Game4</th>
            </tr>
          </thead>
          <tbody>
            { this.debaterList() }
          </tbody>
        </table>
      </div>
      </>
    )
  }
}