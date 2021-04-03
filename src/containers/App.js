import React, {Component} from 'react';
import CardList from '../components/CardList';
//import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())//parsing converting to json
      .then(users => this.setState({robots: users}));//jason parsing is done here now we dont need import robots
  }

  onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}); 
  }

  render(){

    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

    return !robots.length ?
      <h1>Loading</h1>:
      
        <div className = "tc">
              <h1 className="f1">RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <ErrorBoundary>
                  <CardList robots={filteredRobots} />
                </ErrorBoundary>
              </Scroll>
        </div>
      
  
    
  }
}  

export default App;
//STATE V/S PROPS