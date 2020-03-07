import React, { Component } from 'react'

import LocationNames from '../modals/LocationNames'

class OverlayTile extends Component {
    state = {
        tiles: ['none', 'title', 'aqua', 'lime', 'red'],
        tile: 0,
        width: 32,
        height: 32,
        selectedTile: 0,
        title: 'Dark Woods'
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
        let title
        if (this.state.tile === 0) {
            frameStyle = {
                width: this.state.width,
                height: this.state.height
            }
            title = null
        } else if (this.state.tile === 1) {
            frameStyle = {
                width: this.state.width,
                height: this.state.height
            }
            title = this.state.title
        } else {
            frameStyle = {
                width: this.state.width,
                height: this.state.height,
                borderWidth: 2,
                borderColor: this.state.tiles[this.state.tile],
                borderStyle: 'solid'
            }
            title = null
        }

        tile = (
            <div
                className="tile overlay-layer_tile"
                onClick={this.changeTile}
                style={frameStyle}
            >
                {title ? <LocationNames title={this.state.title} /> : ''}
            </div>
        )

        return <React.Fragment>{tile}</React.Fragment>
    }
}

export default OverlayTile
