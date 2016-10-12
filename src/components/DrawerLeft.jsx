import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'

export default class DrawerLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => this.setState({open: true})

  handleClose = () => {
    if(!this.state.subMenuOpen) {
      this.props.close()
    }
  }



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
