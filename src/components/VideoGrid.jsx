import React, {PropTypes} from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
// import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
}

const VideoGrid = ({tilesData}) => (
  <div style={styles.root}>
  {console.log(tilesData)}
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {/* <Subheader>December</Subheader> */}
      {tilesData.map((tile) => (
        <GridTile
          key={tile.id}
          title={tile.title}
          // subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} role="presentation"/>
        </GridTile>
      ))}
    </GridList>
  </div>
)

VideoGrid.propTypes = {
  tilesData: PropTypes.array.isRequired
}

export default VideoGrid
