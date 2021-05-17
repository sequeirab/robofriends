import React from 'react';
import Title from '../components/Title';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}))

    }

    onSearchChange = (event)  =>{
        this.setState( {searchfield: event.target.value})
       
    }

    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
       })
       return !robots.length ?
         <h1>Loading </h1> 
         :
        (  <div className='tc'>
                  <Title />
                  <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div> 
        )
    }
}



export default App;