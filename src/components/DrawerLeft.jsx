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
    const {handleClose, isOpen} = this.props
    return (
      <div onMouseLeave={handleClose}>
        <Drawer
          open={isOpen}
          containerStyle={{height: 'calc(100% - 64px)', top: 64}}
         >
        </Drawer>
      </div>
    )
  }
}

DrawerLeft.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default DrawerLeft
