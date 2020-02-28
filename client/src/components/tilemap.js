import React, { Component, Fragment } from 'react'
import GroundLayer from './ground_layer'

class Tilemap extends Component {
    state = {
        tilemap: [0, 0, 0],
        map_size: [10, 50],
        tile_size: 64
    }

    render() {
        return (
            <Fragment>
                <div className="tile_map">
                    <div className="grid_layer"></div>
                    <div className="weather_layer"></div>
                    <div className="player_layer"></div>
                    <GroundLayer
                        height={this.state.map_size[0]}
                        width={this.state.map_size[1]}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Tilemap
