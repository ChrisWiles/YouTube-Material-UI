import React, {Component, PropTypes} from 'react'
import Dialog from 'material-ui/Dialog'
import YouTube from 'react-youtube'

const opts = {
  height: '500px',
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
}

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0)'
}

const customBodyStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0)'
}
class VideoPlayer extends Component {

  render() {
    const {handleToggle, open, id} = this.props
    return (
      <div className="Dialog">
        <Dialog
          autoDetectWindowHeight={true}
          modal={false}
          onRequestClose={handleToggle}
          open={open}
          contentStyle={customContentStyle}
          autoScrollBodyContent={false}
          bodyStyle={{backgroundColor: 'rgba(255, 255, 255, 0)'}}
          style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}
          titleStyle={{backgroundColor: 'rgba(255, 255, 255, 0)'}}
          overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.741176)'}}
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
