import React, { Component, Fragment } from 'react'
import GroundLayer from './ground_layer'
import GridLayer from './grid_layer'
import PlayerLayer from './player_layer'

class Tilemap extends Component {
    state = {
        tilemap: [0, 0, 0],
        map_size: [20, 15],
        tile_size: 64,
        showGrid: true,
        active_layer: 'ground_layer'
    }
    componentDidUpdate() {
        if (this.props.showGrid !== this.state.showGrid) {
            this.setState({ showGrid: this.props.showGrid })
        }

        if (this.props.activeLayer !== this.state.active_layer) {
            this.setState({ active_layer: this.props.activeLayer })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="tile_map">
                    <GridLayer
                        width={this.state.map_size[0]}
                        height={this.state.map_size[1]}
                        showGrid={this.state.showGrid}
                    />
                    <PlayerLayer
                        width={this.state.map_size[0]}
                        height={this.state.map_size[1]}
                        activeLayer={this.state.active_layer}
                    />
                    <GroundLayer
                        width={this.state.map_size[0]}
                        height={this.state.map_size[1]}
                        activeLayer={this.state.active_layer}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Tilemap
