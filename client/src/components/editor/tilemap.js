import React, { Component, Fragment } from 'react'
import GridLayer from './grid_layer'
import Layer from './Layer'

class Tilemap extends Component {
    state = {
        map_size: [20, 20],
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
                        showGrid={this.props.showGrid}
                        tileSize={this.props.tileSize}
                    />
                    <Layer
                        width={this.state.map_size[0]}
                        height={this.state.map_size[1]}
                        activeLayer={this.state.active_layer}
                        tileSize={this.props.tileSize}
                        layerType="overlay_layer"
                        selectedTile={this.props.selectedTile}
                    />
                    <Layer
                        width={this.state.map_size[0]}
                        height={this.state.map_size[1]}
                        activeLayer={this.state.active_layer}
                        tileSize={this.props.tileSize}
                        layerType="player_layer"
                        selectedTile={this.props.selectedTile}
                    />
                    <Layer
                        width={this.state.map_size[0]}
                        height={this.state.map_size[1]}
                        activeLayer={this.state.active_layer}
                        tileSize={this.props.tileSize}
                        layerType="ground_layer"
                        selectedTile={this.props.selectedTile}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Tilemap
