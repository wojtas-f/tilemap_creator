import React, { Component, Fragment } from 'react'
import GroundLayer from './ground_layer'
import GridLayer from './grid_layer'
import PlayerLayer from './player_layer'

class Tilemap extends Component {
    state = {
        map_size: [20, 15],
        showGrid: true,
        active_layer: 'ground_layer',
        tileSize: 32
    }
    componentDidUpdate() {
        if (this.props.showGrid !== this.state.showGrid) {
            this.setState({ showGrid: this.props.showGrid })
        }

        if (this.props.activeLayer !== this.state.active_layer) {
            this.setState({ active_layer: this.props.activeLayer })
        }

        if (this.props.tileSize !== this.state.tileSize) {
            console.log('TileSize change')
            this.setState({ tileSize: this.props.tileSize })
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
                        tileSize={this.state.tileSize}
                    />
                    <PlayerLayer
                        width={this.state.map_size[0]}
                        height={this.state.map_size[1]}
                        activeLayer={this.state.active_layer}
                        tileSize={this.state.tileSize}
                    />
                    <GroundLayer
                        width={this.state.map_size[0]}
                        height={this.state.map_size[1]}
                        activeLayer={this.state.active_layer}
                        tileSize={this.state.tileSize}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Tilemap
