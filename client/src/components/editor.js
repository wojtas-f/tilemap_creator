import React, { Component } from 'react'

import Tilemap from './editor/tilemap'
import UI from './ui/ui'
import ShowHelp from './help/ShowHelp'

/**
 * Root element for map editor and UI
 */
class Editor extends Component {
    state = {
        showGrid: true,
        active_layer: 'ground_layer',
        selectedTile: 0,
        showHelpMenu: false,
        tileSize: 32
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
    }

    handleMapScaling = tileSize => {
        this.setState({ tileSize })
    }

    handleTileChange = selectedTile => {
        this.setState({ selectedTile })
    }

    render() {
        let menu
        if (this.state.showHelpMenu) {
            menu = <ShowHelp />
        } else {
            menu = null
        }
        return (
            <div className="App">
                {menu}
                <UI
                    handleGridOpacityChange={this.handleGridOpacityChange}
                    handleLayerChange={this.handleLayerChange}
                    handleMapScaling={this.handleMapScaling}
                    handleTileChange={this.handleTileChange}
                />
                <Tilemap
                    showGrid={this.state.showGrid}
                    activeLayer={this.state.active_layer}
                    tileSize={this.state.tileSize}
                    selectedTile={this.state.selectedTile}
                />
            </div>
        )
    }
}

export default Editor
