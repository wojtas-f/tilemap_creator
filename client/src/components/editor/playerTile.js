import React, { Component } from 'react'

import obstacle_1 from '../../tiles/obstacle_1.png'
import tree_1 from '../../tiles/tree.png'
import tree_2 from '../../tiles/tree_2.png'

import ChangeTileWindow from './change_tile'

class PlayerTile extends Component {
    state = {
        tiles_img: [obstacle_1, tree_1, tree_2],
        tile: {
            type: 0
        },
        filled: false,
        show_tile_change_window: false,
        tileSet: 'playerTiles'
    }

    changeTile = tile_number => {
        let tile = this.state.tile
        tile.type = tile_number
        let show = !this.state.show_tile_change_window

        this.setState({ tile, show_tile_change_window: show, filled: true })
    }
    toggleTileMenu = () => {
        let show = !this.state.show_tile_change_window
        this.setState({ show_tile_change_window: show })
    }

    render() {
        let tile_menu
        let tile
        if (this.state.show_tile_change_window) {
            tile_menu = (
                <ChangeTileWindow
                    changeSelectedTile={this.changeTile}
                    tileSet={this.state.tileSet}
                />
            )
        } else {
            tile_menu = null
        }

        if (this.state.filled) {
            tile = (
                <img
                    src={this.state.tiles_img[this.state.tile.type]}
                    alt="obstacle"
                    className="player-layer__tile"
                    onClick={() => this.toggleTileMenu()}
                    id={this.props.id}
                />
            )
        } else {
            tile = (
                <div
                    className="player-layer__empty-tile"
                    onClick={() => this.toggleTileMenu()}
                ></div>
            )
        }

        return (
            <React.Fragment>
                {tile_menu}
                {tile}
            </React.Fragment>
        )
    }
}

export default PlayerTile
