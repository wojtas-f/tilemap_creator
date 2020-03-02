import React, { Component } from 'react'

import Tilemap from './editor/tilemap'
import UI from './ui/ui'

class Editor extends Component {
    state = {
        showGrid: true,
        active_layer: 'ground_layer'
    }

    handleGridOpacityChange = show => {
        if (this.state.showGrid !== show) {
            this.setState({ showGrid: show })
        }
    }

    handleLayerChange = active_layer => {
        if (this.state.active_layer !== active_layer) {
            this.setState({ active_layer: active_layer })
        }
        console.log('Active layer: ', active_layer)
    }
    render() {
        return (
            <div className="App">
                <UI
                    handleGridOpacityChange={this.handleGridOpacityChange}
                    handleLayerChange={this.handleLayerChange}
                />
                <Tilemap
                    showGrid={this.state.showGrid}
                    activeLayer={this.state.active_layer}
                />
            </div>
        )
    }
}

export default Editor
