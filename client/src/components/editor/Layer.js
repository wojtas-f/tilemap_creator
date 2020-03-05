import React, { Component } from 'react'
import GroundTile from './groundTile'
import PlayerTile from './playerTile'

import {
    createArrayOfTiles,
    setActiveStyleWidth
} from '../../helpers/layers_helper'

class Layer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tiles: [],
            ground_width: 32,
            active: true,
            tileSize: 32,
            layerType: props.layerType
        }
    }

    componentDidMount() {
        const { height, width } = this.props
        let tiles = createArrayOfTiles(width, height)
        let ground_width = this.state.tileSize * width
        this.setState({ tiles, ground_width })
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
                />
            ))
        } else if (this.state.layerType === 'player_layer') {
            layerStyle = 'player-layer'
            tile = this.state.tiles.map(tile => (
                <PlayerTile
                    key={tile.id}
                    id={tile.id}
                    tileSize={this.state.tileSize}
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
