import React, {Component} from 'react'
// import ToolBarTop from './ToolBarTop'
import SearchBar from './SearchBar'
import VideoGrid from './VideoGrid'
import VideoPlayer from './VideoPlayer'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      isVideoPlayerOpen: false,
      videoID: "test"
    }
  }

  handleToggleVideoPlayer = () => this.setState({isVideoPlayerOpen: !this.state.isVideoPlayerOpen})

  setVideoPlayerID = (videoID) => this.setState({videoID})

  handleVideos = (videos) => {
    const mapped = videos.map(video => {
      const {id, snippet} = video
      return {
        id : id.videoId,
        title: snippet.title,
        img: snippet.thumbnails.medium.url,
        description: snippet.description,
        publishedAt: snippet.publishedAt
      }
    })

    this.setState({videos: mapped})
  }

  render() {
    const {videos, isVideoPlayerOpen, videoID} = this.state
    return (
      <div>
        {/* <ToolBarTop/> */}
        <SearchBar  handleVideos={this.handleVideos}/>
        <VideoGrid videos={videos} handleToggleVideoPlayer={this.handleToggleVideoPlayer} setID={this.setVideoPlayerID}/>
        {videos[0] ? <VideoPlayer id={videoID} open={isVideoPlayerOpen} handleToggle={this.handleToggleVideoPlayer} /> : null}
      </div>
    )
  }
}

export default App
