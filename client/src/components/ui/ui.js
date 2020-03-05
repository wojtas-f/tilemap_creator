import React, { Component } from 'react'
import LayerSelection from './layer_selection'
import ShowGrid from './show_grid'
import ScaleMap from './scale_map'

class UI extends Component {
    handleGridOpacityChange = show => {
        this.props.handleGridOpacityChange(show)
    }
    handleLayerChange = active_layer => {
        this.props.handleLayerChange(active_layer)
        //console.log(`Active layer: ${active_layer}`)
    }
    handleMapScaling = tileSize => {
        this.props.handleMapScaling(tileSize)
    }

    render() {
        return (
            <div className="ui">
                <LayerSelection handleLayerChange={this.handleLayerChange} />
                <ShowGrid
                    handleGridOpacityChange={this.handleGridOpacityChange}
                />
                <ScaleMap handleMapScaling={this.handleMapScaling} />
            </div>
        )
    }
}

export default UI
