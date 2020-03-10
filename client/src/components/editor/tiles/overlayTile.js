import React, { Component } from 'react'

import LocationName from '../LocationName'
import AddLocation from '../modals/AddLocation'

import { compare } from '../../../helpers/tiles_helper'

class OverlayTile extends Component {
    state = {
        tiles: ['none', 'aqua', 'lime', 'red'],
        tile: 0,
        width: 32,
        height: 32,
        selectedTile: 0,
        title: '',
        showMenu: false
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

    openLocationMenu = e => {
        e.preventDefault()
        this.setState({ showMenu: true })
    }

    addLocationAndCloseMenu = newLocation => {
        this.setState({ showMenu: false, title: newLocation })
        console.log(newLocation)
    }

    /**
     * Change tile image or tile frame
     * If selectedTile parameter >= 100 - change frame
     * If selectedTile parameter < 100 - change image
     */
    changeTile = () => {
        if (
            this.state.tile !== this.state.selectedTile ||
            this.state.filled === false
        ) {
            this.setState({ tile: this.state.selectedTile, filled: true })
        }
    }

    render() {
        let tile
        let frameStyle
        let title = this.state.title
        let menu

        if (this.state.showMenu) {
            menu = (
                <AddLocation
                    addLocationAndCloseMenu={this.addLocationAndCloseMenu}
                />
            )
        } else {
            menu = null
        }

        if (this.state.tile === 0) {
            frameStyle = {
                width: this.state.width,
                height: this.state.height
            }
        } else {
            frameStyle = {
                width: this.state.width,
                height: this.state.height,
                borderWidth: 2,
                borderColor: this.state.tiles[this.state.tile],
                borderStyle: 'solid'
            }
        }

        tile = (
            <div
                className="tile overlay-layer_tile"
                onClick={this.changeTile}
                style={frameStyle}
                onContextMenu={this.openLocationMenu}
            >
                {title ? <LocationName title={this.state.title} /> : ''}
            </div>
        )

        return (
            <React.Fragment>
                {menu}
                {tile}
            </React.Fragment>
        )
    }
}

export default OverlayTile
