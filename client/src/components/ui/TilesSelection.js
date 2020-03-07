import React, { Component } from 'react'

import grass_1 from '../../tiles/grass_1.png'
import grass_2 from '../../tiles/grass_2.png'
import grass_3 from '../../tiles/grass_3.png'
import grass_4 from '../../tiles/grass_4.png'
import road_1 from '../../tiles/road_h_left-end.png'
import road_2 from '../../tiles/road_h.png'
import road_3 from '../../tiles/road_h_right-end.png'
import road_4 from '../../tiles/road_v_top-end.png'
import road_5 from '../../tiles/road_v.png'
import road_6 from '../../tiles/road_v_bottom-end.png'

import obstacle_1 from '../../tiles/obstacle_1.png'
import tree_1 from '../../tiles/tree.png'
import tree_2 from '../../tiles/tree_2.png'

/**
 * Select the tile that will be used to change the appearance of map tiles
 */
class TilesSelection extends Component {
    state = {
        groundTiles: [
            { name: grass_1, id: 0 },
            { name: grass_2, id: 1 },
            { name: grass_3, id: 2 },
            { name: grass_4, id: 3 },
            { name: road_1, id: 4 },
            { name: road_2, id: 5 },
            { name: road_3, id: 6 },
            { name: road_4, id: 7 },
            { name: road_5, id: 8 },
            { name: road_6, id: 9 }
        ],
        playerTiles: [
            { name: obstacle_1, id: 0 },
            { name: tree_1, id: 1 },
            { name: tree_2, id: 2 }
        ],
        frames: [
            { name: 'none', id: 0 },
            { name: 'aqua', id: 1 },
            { name: 'lime', id: 2 },
            { name: 'red', id: 3 }
        ],
        activeLayer: 'ground_layer',
        selectedTile: 0
    }

    componentDidUpdate() {
        if (this.props.activeLayer !== this.state.activeLayer) {
            this.setState({ activeLayer: this.props.activeLayer })
        }
    }

    /**
     * Send the ID of selected tile to editor components
     *
     * @param {number} tileID - tile id used to select correct tile from array
     */
    selectTile = tileID => {
        this.props.handleTileChange(tileID)
        this.setState({ selectedTile: tileID })
    }

    /**
     * Send the ID of selected frame to editor components
     *
     * @param {number} frameID - frame id used to select correct frame from array
     */
    selectFrame = frameID => {
        this.props.handleTileChange(frameID)
        this.setState({ selectedTile: frameID })
    }

    /**
     * Function called by Map method to render tiles from the list
     *
     *  @param {object} tile - a single tile from groundTiles or playerTiles array
     *  @returns {Component} - single tile React component
     */
    renderTile = tile => {
        let style

        if (tile.id === this.state.selectedTile) {
            style = 'ui__tiles-selection_tiles-menu_example tile-selected'
        } else {
            style = 'ui__tiles-selection_tiles-menu_example'
        }

        return (
            <img
                key={tile.id}
                src={tile.name}
                alt="empty"
                className={style}
                onClick={() => this.selectTile(tile.id)}
            />
        )
    }

    /**
     *
     * @param {object} frame - a single frame from frames array
     * @returns {HTML_Element} - a single frame
     */
    renderFrame = frame => {
        let frameStyle
        if (frame.id === this.state.selectedTile) {
            frameStyle = {
                borderWidth: 2,
                borderColor: frame.name,
                borderStyle: 'solid',
                backgroundColor: `rgba(${193}, ${66}, ${66}, ${0.57})`
            }
        } else {
            frameStyle = {
                borderWidth: 2,
                borderColor: frame.name,
                borderStyle: 'solid'
            }
        }

        return (
            <div
                key={frame.id}
                className="tile"
                style={frameStyle}
                onClick={() => this.selectFrame(frame.id)}
            ></div>
        )
    }

    render() {
        let tiles
        let colorFrames
        if (this.state.activeLayer === 'player_layer') {
            console.log('Player tile tiles')
            tiles = this.state.playerTiles
            colorFrames = null
        } else if (this.state.activeLayer === 'ground_layer') {
            tiles = this.state.groundTiles
            colorFrames = null
        } else if (this.state.activeLayer === 'overlay_layer') {
            tiles = null
            colorFrames = this.state.frames
        }

        return (
            <div className="ui__tiles-selection">
                <p className="ui__tiles-selection_title">Select Tile</p>
                <div className="ui__tiles-selection_tiles-menu">
                    {tiles ? tiles.map(this.renderTile) : <br />}
                </div>
                <div className="ui__tiles-selection_tiles-menu">
                    {colorFrames ? colorFrames.map(this.renderFrame) : <br />}
                </div>
            </div>
        )
    }
}

export default TilesSelection
