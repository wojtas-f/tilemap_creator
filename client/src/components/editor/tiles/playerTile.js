import React, { Component, Fragment } from 'react'

import obstacle_1 from '../../../tiles/obstacle_1.png'
import tree_1 from '../../../tiles/tree.png'
import tree_2 from '../../../tiles/tree_2.png'

import { compare } from '../../../helpers/tiles_helper'

class PlayerTile extends Component {
    state = {
        tiles_img: ['clear', obstacle_1, tree_1, tree_2],
        tile: 0,
        tileSet: 'playerTiles',
        width: 32,
        height: 32,
        selectedTile: 0
    }

    componentDidUpdate() {
        const changeTileSize = compare(this.props.tileSize, this.state.width)
        const changeSelectedTile = compare(
            this.props.selectedTile,
            this.state.selectedTile
        )

        if (changeTileSize) {
            this.setState({
                width: this.props.tileSize,
                height: this.props.tileSize
            })
        }

        if (changeSelectedTile) {
            this.setState({ selectedTile: this.props.selectedTile })
        }
    }

    /**
     * Change tile image or tile frame to the image/frame selected in Tile Selection component
     */
    changeTile = () => {
        if (this.state.tile !== this.state.selectedTile) {
            this.setState({ tile: this.state.selectedTile })
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
        if (this.state.tile === 0) {
            tile = this.renderFrame()
        } else {
            tile = this.renderTile()
        }

        return <Fragment>{tile}</Fragment>
    }
}

export default PlayerTile
