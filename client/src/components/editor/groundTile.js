import React, { Component } from 'react'
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

import ChangeTileWindow from './change_tile'

class Tile extends Component {
    state = {
        tiles_img: [
            grass_1,
            grass_2,
            grass_3,
            grass_4,
            road_1,
            road_2,
            road_3,
            road_4,
            road_5,
            road_6
        ],
        tile: {
            type: 0
        },
        show_tile_change_window: false
    }

    changeTile = tile_number => {
        let tile = this.state.tile
        tile.type = tile_number
        let show = !this.state.show_tile_change_window
        this.setState({ tile, show_tile_change_window: show })
    }
    toggleTileMenu = () => {
        let show = !this.state.show_tile_change_window
        this.setState({ show_tile_change_window: show })
    }

    render() {
        let tile_menu
        if (this.state.show_tile_change_window) {
            tile_menu = (
                <ChangeTileWindow changeSelectedTile={this.changeTile} />
            )
        } else {
            tile_menu = null
        }
        return (
            <React.Fragment>
                {tile_menu}
                <img
                    src={this.state.tiles_img[this.state.tile.type]}
                    alt="ground tile"
                    className="ground-layer__tile"
                    onClick={() => this.toggleTileMenu()}
                    id={this.props.id}
                />
            </React.Fragment>
        )
    }
}

export default Tile