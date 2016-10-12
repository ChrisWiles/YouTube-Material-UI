import React, {Component} from 'react'
import ToolBarTop from './ToolBarTop'
import SearchBar from './SearchBar'
import './App.css'


class App extends Component {

  render() {
    return (
      <div>
        <ToolBarTop/>
        <SearchBar/>
      </div>
    )
  }
}

export default App
