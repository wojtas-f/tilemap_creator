import React, { Component } from 'react'
import Tile from './tile'

class Tilemap extends Component {
    state = {
        tilemap: [0, 0, 0],
        map_size: [128, 128],
        tile_size: 64
    }

    render() {
        return (
            <div className="tile_map">
                <div className="grid_layer"></div>
                <div className="weather_layer"></div>
                <div className="player_layer"></div>
                <div className="gournd_layer">
                    <Tile />
                </div>
            </div>
        )
    }
}

export default Tilemap
