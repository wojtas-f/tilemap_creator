import React, { Component } from 'react'

import obstacle_1 from '../../../tiles/obstacle_1.png'
import tree_1 from '../../../tiles/tree.png'
import tree_2 from '../../../tiles/tree_2.png'

class PlayerTile extends Component {
    state = {
        tiles_img: [obstacle_1, tree_1, tree_2],
        frames: ['none', 'red', 'aqua', 'lime'],
        tile: 0,
        frame: 100,
        filled: false,
        tileSet: 'playerTiles',
        width: 32,
        height: 32,
        selectedTile: 0
    }

    /**
     * Change tile image or tile frame
     * If selectedTile parameter >= 100 - change frame
     * If selectedTile parameter < 100 - change image
     */
    changeTile = () => {
        if (this.state.selectedTile >= 100) {
            let frame = this.state.selectedTile
            this.setState({ frame })
        } else {
            if (
                this.state.tile !== this.state.selectedTile ||
                this.state.filled === false
            ) {
                this.setState({ tile: this.state.selectedTile, filled: true })
            }
        }
    }

    componentDidUpdate() {
        if (this.props.tileSize !== this.state.width) {
            this.setState({
                width: this.props.tileSize,
                height: this.props.tileSize
            })
        }
        if (this.props.selectedTile !== this.state.selectedTile) {
            this.setState({ selectedTile: this.props.selectedTile })
        }
    }

    render() {
        let tile
        let frameStyle
        if (this.state.frame === 100) {
            frameStyle = {
                width: this.state.width,
                height: this.state.height
            }
        } else {
            frameStyle = {
                width: this.state.width,
                height: this.state.height,
                borderWidth: 2,
                borderColor: this.state.frames[this.state.frame - 100],
                borderStyle: 'solid'
            }
        }

        if (this.state.filled) {
            tile = (
                <img
                    src={this.state.tiles_img[this.state.tile]}
                    alt="obstacle"
                    className="tile"
                    onClick={this.changeTile}
                    id={this.props.id}
                    style={{
                        width: this.state.width,
                        height: this.state.height
                    }}
                />
            )
        } else {
            tile = (
                <div
                    className="tile"
                    onClick={this.changeTile}
                    style={frameStyle}
                ></div>
            )
        }

        return <React.Fragment>{tile}</React.Fragment>
    }
}

export default PlayerTile
