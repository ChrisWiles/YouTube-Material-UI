import React, {Component} from 'react'
import ToolBarTop from './ToolBarTop'
import SearchBar from './SearchBar'
import VideoGrid from './VideoGrid'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props)
    this.handleVideos = this.handleVideos.bind(this)
    this.state = {
      videos: []
    }
  }

  handleVideos(videos) {
    const mapped = videos.map(video => {
      const {id, snippet} = video
      return {
        id : id.videoId,
        title: snippet.title,
        img: snippet.thumbnails.medium.url
      }
    })

    this.setState({videos: mapped})
    console.log(mapped)
  }

  render() {
    return (
      <div>
        <ToolBarTop/>
        <SearchBar handleVideos={this.handleVideos}/>
        <VideoGrid tilesData={this.state.videos}/>
      </div>
    )
  }
}

export default App
// {img: 'images/grid-list/water-plant-821293_640.jpg',
// title: 'Water plant',
// author: 'BkrmadtyaKarki',}
