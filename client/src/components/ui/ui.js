import React, { Component } from 'react'
import LayerSelection from './layer_selection'
import ShowGrid from './show_grid'
import ScaleMap from './scale_map'
import TilesSelection from './TilesSelection'

class UI extends Component {
    state = {
        activeLayer: 'ground_layer'
    }
    handleGridOpacityChange = show => {
        this.props.handleGridOpacityChange(show)
    }
    handleLayerChange = active_layer => {
        this.props.handleLayerChange(active_layer)
        this.setState({ activeLayer: active_layer })
        //console.log(`Active layer: ${active_layer}`)
    }
    handleMapScaling = tileSize => {
        this.props.handleMapScaling(tileSize)
    }
    handleTileChange = selectedTile => {
        this.props.handleTileChange(selectedTile)
    }

    render() {
        return (
            <div className="ui">
                <LayerSelection handleLayerChange={this.handleLayerChange} />
                <ShowGrid
                    handleGridOpacityChange={this.handleGridOpacityChange}
                />
                <ScaleMap handleMapScaling={this.handleMapScaling} />
                <TilesSelection
                    handleTileChange={this.handleTileChange}
                    activeLayer={this.state.activeLayer}
                />
            </div>
        )
    }
}

export default UI
