import React, {Component, PropTypes} from 'react'
import {GridTile} from 'material-ui/GridList'


class VideoGridItem extends Component {

  handleVideoPlayer = () => {
    const {handleToggleVideoPlayer, setID, video} = this.props
    handleToggleVideoPlayer()
    setID(video.id)
  }

  render() {
    const {title, img} = this.props.video
    return (
      <GridTile
        title={title}
        // subtitle={<span>by <b>{tile.author}</b></span>}
        onTouchTap={this.handleVideoPlayer}
      >
        <img src={img} role="presentation"/>
      </GridTile>
    )
  }
}

VideoGridItem.propTypes = {
  video: PropTypes.object.isRequired,
  setID: PropTypes.func.isRequired
}

export default VideoGridItem
