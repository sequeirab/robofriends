import React from 'react';
import Title from './Title';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    

    onSearchChange = (event)  =>{
        this.setState( {searchfield: event.target.value})
       
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
       })
        return (
            <div className='tc'>
                  <Title />
                  <SearchBox searchChange={this.onSearchChange}/>
                  <CardList robots={filteredRobots}/>
            </div>
           
            
            );
    }
}



export default App;