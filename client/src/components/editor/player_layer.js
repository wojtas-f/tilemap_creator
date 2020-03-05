import React, { Component } from 'react'
import PlayerTile from './playerTile'

import {
    createArrayOfTiles,
    setActiveStyleWidth
} from '../../helpers/layers_helper'

class PlayerLayer extends Component {
    state = {
        tiles: [],
        ground_width: 32,
        active: false,
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
        if (this.props.activeLayer === 'player_layer') {
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
            <div className="player-layer" style={activeStyle}>
                {this.state.tiles
                    ? this.state.tiles.map(tile => (
                          <PlayerTile
                              key={tile.id}
                              id={tile.id}
                              tileSize={this.state.tileSize}
                          />
                      ))
                    : 'Loading grid...'}
            </div>
        )
    }
}

export default PlayerLayer
