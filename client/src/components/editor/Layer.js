import React, { Component } from 'react'
import GroundTile from './tiles/groundTile'
import PlayerTile from './tiles/playerTile'
import OverlayTile from './tiles/overlayTile'

import {
    createArrayOfTiles,
    setActiveStyleWidth
} from '../../helpers/layers_helper'

class Layer extends Component {
    constructor(props) {
        super(props)
        let tiles = createArrayOfTiles(props.width, props.height)
        let ground_width = props.tileSize * props.width
        this.state = {
            tiles: tiles,
            ground_width: ground_width,
            active: true,
            tileSize: 32,
            layerType: props.layerType,
            selectedTile: props.selectedTile
        }
    }

    componentDidUpdate() {
        let isActive
        if (this.props.activeLayer === this.state.layerType) {
            isActive = true
        } else {
            isActive = false
        }

        if (isActive !== this.state.active) {
            this.setState({ active: isActive })
        }

        if (this.props.tileSize !== this.state.tileSize) {
            const { width } = this.props
            let ground_width = this.props.tileSize * width
            this.setState({ tileSize: this.props.tileSize, ground_width })
        }
    }

    render() {
        let tile
        let layerStyle
        let activeStyle = setActiveStyleWidth(
            this.state.active,
            this.state.ground_width
        )

        if (this.state.layerType === 'ground_layer') {
            layerStyle = 'ground-layer'
            tile = this.state.tiles.map(tile => (
                <GroundTile
                    key={tile.id}
                    id={tile.id}
                    tileSize={this.state.tileSize}
                    selectedTile={this.props.selectedTile}
                />
            ))
        } else if (this.state.layerType === 'player_layer') {
            layerStyle = 'player-layer'
            tile = this.state.tiles.map(tile => (
                <PlayerTile
                    key={tile.id}
                    id={tile.id}
                    tileSize={this.state.tileSize}
                    selectedTile={this.props.selectedTile}
                />
            ))
        } else if (this.state.layerType === 'overlay_layer') {
            layerStyle = 'overlay-layer'
            tile = this.state.tiles.map(tile => (
                <OverlayTile
                    key={tile.id}
                    id={tile.id}
                    tileSize={this.state.tileSize}
                    selectedTile={this.props.selectedTile}
                />
            ))
        }

        return (
            <div className={layerStyle} style={activeStyle}>
                {tile}
            </div>
        )
    }
}

export default Layer
