import React, { Component, Fragment } from 'react'
import Tile from './tile'
import ChangeTileWindow from './change_tile'

class Tilemap extends Component {
    state = {
        tilemap: [0, 0, 0],
        map_size: [128, 128],
        tile_size: 64,
        show_tile_change_window: true
    }
    change_tile = () => {
        console.log(1)
    }

    render() {
        return (
            <Fragment>
                {this.state.show_tile_change_window ? (
                    <ChangeTileWindow />
                ) : (
                    console.log('2')
                )}

                <div className="tile_map">
                    <div className="grid_layer"></div>
                    <div className="weather_layer"></div>
                    <div className="player_layer"></div>
                    <div className="gournd_layer">
                        <Tile
                            change_tile={this.change_tile}
                            tileset={this.state.tileset}
                        />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Tilemap
