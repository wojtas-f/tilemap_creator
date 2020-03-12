import React, { Component, Fragment } from 'react'

import Tilemap from './editor/tilemap'
import UI from './ui/ui'
import MapSize from './editor/modals/MapSize'

/**
 * Root element for map editor and UI
 */
class Editor extends Component {
    state = {
        showGrid: true,
        active_layer: 'ground_layer',
        selectedTile: 0,
        tileSize: 32,
        mapSize: null
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

    handleMapSize = mapSize => {
        console.log(mapSize)
        this.setState({ mapSize })
    }

    render() {
        const appReady = (
            <Fragment>
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
                    mapSize={this.state.mapSize}
                />
            </Fragment>
        )
        const askMapSize = <MapSize handleMapSize={this.handleMapSize} />
        return (
            <div className="Editor">
                {this.state.mapSize ? appReady : askMapSize}
            </div>
        )
    }
}

export default Editor
