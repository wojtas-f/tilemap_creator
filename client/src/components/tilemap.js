import React, { Component, Fragment } from 'react'
import GroundLayer from './ground_layer'
import GridLayer from './grid_layer'

class Tilemap extends Component {
    state = {
        tilemap: [0, 0, 0],
        map_size: [50, 25],
        tile_size: 64
    }

    render() {
        return (
            <Fragment>
                <div className="tile_map">
                    <GridLayer
                        width={this.state.map_size[0]}
                        height={this.state.map_size[1]}
                    />
                    <GroundLayer
                        width={this.state.map_size[0]}
                        height={this.state.map_size[1]}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Tilemap
