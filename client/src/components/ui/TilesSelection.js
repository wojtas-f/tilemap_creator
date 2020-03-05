import React, { Component, Fragment } from 'react'

import grass_1 from '../../tiles/grass_1.png'
import grass_2 from '../../tiles/grass_2.png'
import grass_3 from '../../tiles/grass_3.png'
import grass_4 from '../../tiles/grass_4.png'
import road_1 from '../../tiles/road_h_left-end.png'
import road_2 from '../../tiles/road_h.png'
import road_3 from '../../tiles/road_h_right-end.png'
import road_4 from '../../tiles/road_v_top-end.png'
import road_5 from '../../tiles/road_v.png'
import road_6 from '../../tiles/road_v_bottom-end.png'

import obstacle_1 from '../../tiles/obstacle_1.png'
import tree_1 from '../../tiles/tree.png'
import tree_2 from '../../tiles/tree_2.png'

class TilesSelection extends Component {
    state = {
        groundTiles: [
            { name: grass_1, id: 0 },
            { name: grass_2, id: 1 },
            { name: grass_3, id: 2 },
            { name: grass_4, id: 3 },
            { name: road_1, id: 4 },
            { name: road_2, id: 5 },
            { name: road_3, id: 6 },
            { name: road_4, id: 7 },
            { name: road_5, id: 8 },
            { name: road_6, id: 9 }
        ],
        playerTiles: [
            { name: obstacle_1, id: 0 },
            { name: tree_1, id: 1 },
            { name: tree_2, id: 2 }
        ],
        frames: [
            { color: 'none', id: 100 },
            { color: 'red', id: 101 },
            { color: 'aqua', id: 102 },
            { color: 'lime', id: 103 }
        ],
        activeLayer: 'ground_layer'
    }
    componentDidUpdate() {
        if (this.props.activeLayer !== this.state.activeLayer) {
            this.setState({ activeLayer: this.props.activeLayer })
        }
    }

    selectTile = tileID => {
        this.props.handleTileChange(tileID)
    }

    selectFrame = frameID => {
        this.props.handleTileChange(frameID)
    }

    render() {
        let tiles
        let colorFrames
        if (this.state.activeLayer === 'player_layer') {
            console.log('Player tile tiles')
            tiles = this.state.playerTiles
            colorFrames = this.state.frames
        } else if (this.state.activeLayer === 'ground_layer') {
            tiles = this.state.groundTiles
            colorFrames = null
        }

        return (
            <Fragment>
                <div className="ui__tiles-selection">
                    <p className="ui__tiles-selection_title">Select Tile</p>
                    <div className="ui__tiles-selection_tiles-menu">
                        {tiles.map(tile => (
                            <img
                                key={tile.id}
                                src={tile.name}
                                alt="empty"
                                className="select-tile__menu_tile"
                                onClick={() => this.selectTile(tile.id)}
                            />
                        ))}
                    </div>
                    <div className="ui__tiles-selection_tiles-menu">
                        {colorFrames
                            ? colorFrames.map(item => (
                                  <div
                                      key={item.id}
                                      className="tile"
                                      style={{
                                          borderWidth: 2,
                                          borderColor: item.color,
                                          borderStyle: 'solid'
                                      }}
                                      onClick={() => this.selectFrame(item.id)}
                                  ></div>
                              ))
                            : 'Tiles...'}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default TilesSelection
