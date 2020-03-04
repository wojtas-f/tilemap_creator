import React, { Component } from 'react'
import GridTile from './gridTile'

class GridLayer extends Component {
    state = {
        tiles: [],
        ground_width: 32,
        showGrid: true,
        tileSize: 32
    }

    componentDidMount() {
        const { height, width } = this.props
        let tiles = []
        let id = 0
        let ground_width = this.state.tileSize * width
        for (let index = 0; index < width; index++) {
            for (let index = 0; index < height; index++) {
                tiles.push({ id })
                id++
            }
        }
        this.setState({ tiles, ground_width })
    }

    componentDidUpdate() {
        if (this.props.showGrid !== this.state.showGrid) {
            this.setState({ showGrid: this.props.showGrid })
        }
        if (this.props.tileSize !== this.state.tileSize) {
            const { width } = this.props
            let ground_width = this.props.tileSize * width
            this.setState({ tileSize: this.props.tileSize, ground_width })
        }
    }

    render() {
        let grid
        if (this.state.showGrid) {
            grid = this.state.tiles.map(tile => (
                <GridTile
                    key={tile.id}
                    id={tile.id}
                    tileSize={this.state.tileSize}
                />
            ))
        } else {
            grid = null
        }
        return (
            <div
                className="grid-layer"
                style={{ width: this.state.ground_width }}
            >
                {grid}
            </div>
        )
    }
}

export default GridLayer
