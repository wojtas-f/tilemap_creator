import React, { Component } from 'react'
import grass from '../tiles/g_grass1.png'
import water from '../tiles/g_water1.png'
import empty from '../tiles/g_empty.png'

import ChangeTileWindow from './change_tile'

class Tile extends Component {
    state = {
        tiles_img: [empty, water, grass],
        tile: {
            type: 1
        },
        show_tile_change_window: false
    }

    changeTile = tile_number => {
        let tile = this.state.tile
        tile.type = tile_number
        this.setState(tile)
    }
    toggleTileMenu = () => {
        let show = !this.state.show_tile_change_window
        console.log(show)
        this.setState({ show_tile_change_window: show })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.show_tile_change_window ? (
                    <ChangeTileWindow changeSelectedTile={this.changeTile} />
                ) : (
                    console.log('nie da rady')
                )}
                <img
                    src={this.state.tiles_img[this.state.tile.type]}
                    alt="grass"
                    className="tile"
                    onClick={() => this.toggleTileMenu()}
                />
            </React.Fragment>
        )
    }
}

export default Tile
