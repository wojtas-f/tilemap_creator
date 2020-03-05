import React, { Component } from 'react'
import Tile from './groundTile'

import {
    createArrayOfTiles,
    setActiveStyleWidth
} from '../../helpers/layers_helper'

class GroundLayer extends Component {
    state = {
        tiles: [],
        ground_width: 32,
        active: true,
        tileSize: 32
    }

    componentDidMount() {
        const { height, width } = this.props
        let tiles = createArrayOfTiles(width, height)
        let ground_width = this.state.tileSize * width

        this.setState({ tiles, ground_width })
    }

    componentDidUpdate() {
        let isActive
        if (this.props.activeLayer === 'ground_layer') {
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
        let activeStyle = setActiveStyleWidth(
            this.state.active,
            this.state.ground_width
        )
        return (
            <div className="ground-layer" style={activeStyle}>
                {this.state.tiles
                    ? this.state.tiles.map(tile => (
                          <Tile
                              key={tile.id}
                              id={tile.id}
                              tileSize={this.state.tileSize}
                          />
                      ))
                    : 'Loading ...'}
            </div>
        )
    }
}

export default GroundLayer
