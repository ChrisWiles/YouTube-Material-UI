import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import DrawerLeft from './DrawerLeft'
import RaisedButton from 'material-ui/RaisedButton'

class AppBarTop extends Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})
  handleClose = () => this.setState({open: false})
  handleOpen = () => this.setState({open: true})


// className="navbar-fixed-top"
  render() {
    return (
      <div >
        <AppBar
          // title={<span style={{fontWeight: 600}}>Test</span>}
          // titleStyle={}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementLeft={<IconButton onMouseOver={this.handleOpen}><MenuIcon/></IconButton>}
          iconElementRight={<RaisedButton label="Sign Into Youtube" secondary={true} />}
        />
        <DrawerLeft
          open={this.state.open}
          close={this.handleClose}
          onToggleDrawer={this.handleToggle}
        />
      </div>
    )
  }
}

export default AppBarTop
