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
        tileSet: 'playerTiles',
        width: 32,
        height: 32
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
    closeWindow = () => {
        this.setState({ show_tile_change_window: false })
    }

    componentDidUpdate() {
        if (this.props.tileSize !== this.state.width) {
            this.setState({
                width: this.props.tileSize,
                height: this.props.tileSize
            })
        }
    }

    render() {
        let tile_menu
        let tile
        if (this.state.show_tile_change_window) {
            tile_menu = (
                <ChangeTileWindow
                    changeSelectedTile={this.changeTile}
                    tileSet={this.state.tileSet}
                    closeWindow={this.closeWindow}
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
                    className="tile"
                    onClick={() => this.toggleTileMenu()}
                    id={this.props.id}
                    style={{
                        width: this.state.width,
                        height: this.state.height
                    }}
                />
            )
        } else {
            tile = (
                <div
                    className="tile"
                    onClick={() => this.toggleTileMenu()}
                    style={{
                        width: this.state.width,
                        height: this.state.height
                    }}
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
