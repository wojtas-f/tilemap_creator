import React, { Component, Fragment } from 'react'

import obstacle_1 from '../../../tiles/obstacle_1.png'
import tree_1 from '../../../tiles/tree.png'
import tree_2 from '../../../tiles/tree_2.png'

class PlayerTile extends Component {
    state = {
        tiles_img: [obstacle_1, tree_1, tree_2],
        tile: 0,
        filled: false,
        tileSet: 'playerTiles',
        width: 32,
        height: 32,
        selectedTile: 0
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

    /**
     * Change tile image or tile frame to the image/frame selected in Tile Selection component
     */
    changeTile = () => {
        if (
            this.state.tile !== this.state.selectedTile ||
            this.state.filled === false
        ) {
            this.setState({ tile: this.state.selectedTile, filled: true })
        }
    }

    /**
     * Render a tile with selected image
     * @returns {Component} - a single component
     */
    renderTile = () => {
        return (
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
    }

    /**
     * Render a frame with colored border
     * @returns {HTML_Element} - a single frame
     */
    renderFrame = () => {
        return (
            <div
                className="tile"
                onClick={this.changeTile}
                style={{
                    width: this.state.width,
                    height: this.state.height
                }}
            ></div>
        )
    }

    render() {
        let tile
        if (this.state.filled) {
            tile = this.renderTile()
        } else {
            tile = this.renderFrame()
        }

        return <Fragment>{tile}</Fragment>
    }
}

export default PlayerTile
