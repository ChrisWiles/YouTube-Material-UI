import React, {Component, PropTypes} from 'react'
import Dialog from 'material-ui/Dialog'
import YouTube from 'react-youtube'

const opts = {
  height: 'auto',
  width: 'auto',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
}


class VideoPlayer extends Component {

  render() {
    const {handleToggle, open, id} = this.props
    return (
      <div>
        <Dialog
          modal={false}
          onRequestClose={handleToggle}
          open={open}
        >
        <YouTube
          videoId={id}
          opts={opts}
          // onReady={this._onReady}
        />
        </Dialog>
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  id: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default VideoPlayer
