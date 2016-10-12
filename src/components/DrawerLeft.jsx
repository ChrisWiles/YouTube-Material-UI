import React, {Component, PropTypes} from 'react'
import Drawer from 'material-ui/Drawer'

class DrawerLeft extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => this.setState({open: true})

  render() {
    return (
      <div onMouseLeave={this.handleClose}>
        <Drawer
          open={this.props.open}
          containerStyle={{height: 'calc(100% - 64px)', top: 64}}
         >
        </Drawer>
      </div>
    )
  }
}

DrawerLeft.propTypes = {
  close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default DrawerLeft
