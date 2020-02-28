import React, { Component } from 'react'
import GridTile from './gridTile'

class GridLayer extends Component {
    state = {
        tiles: [],
        ground_width: 32
    }

    componentDidMount() {
        const { height, width } = this.props
        let tiles = []
        let id = 0
        let ground_width = 32 * width
        for (let index = 0; index < width; index++) {
            for (let index = 0; index < height; index++) {
                tiles.push({ id })
                id++
            }
        }
        this.setState({ tiles, ground_width })
    }

    render() {
        return (
            <div
                className="grid_layer"
                style={{ width: this.state.ground_width }}
            >
                {this.state.tiles
                    ? this.state.tiles.map(tile => (
                          <GridTile key={tile.id} id={tile.id} />
                      ))
                    : 'Loading grid...'}
            </div>
        )
    }
}

export default GridLayer
