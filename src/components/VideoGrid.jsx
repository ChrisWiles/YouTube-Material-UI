import React, {Component, PropTypes} from 'react'
import {GridList} from 'material-ui/GridList'
import VideoGridItem from './VideoGridItem'
// import Subheader from 'material-ui/Subheader'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 16 * 60,
    height: 9 * 60,
    overflowY: 'visible',
  },
}

class VideoGrid extends Component {

  renderVideos(videos) {
    return videos.map(video => {
      return (
        <VideoGridItem
          video={video}
          key={video.id}
          {...this.props}
        />
      )
    })
  }

  render() {
    const videos = this.renderVideos(this.props.videos)
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={280}
          style={styles.gridList}
        >
          {/* <Subheader>December</Subheader> */}
          {videos}
        </GridList>
      </div>
    )
  }
}



VideoGrid.propTypes = {
  videos: PropTypes.array.isRequired
}

export default VideoGrid
