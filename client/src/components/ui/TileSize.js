import React, { Component } from 'react'

/**
 *  Select tile size
 */
class TileSize extends Component {
    state = {
        tileSize: 32
    }

    handleChange = event => {
        let size = parseInt(event.target.value)
        this.props.handleMapScaling(size)
        this.setState({ tileSize: size })
    }

    render() {
        return (
            <div className="ui__section">
                <p className="ui__section_title">Select Tile Size:</p>
                <label>
                    <select
                        value={this.state.tileSize}
                        onChange={this.handleChange}
                        className="ui__section_radio-button-selection"
                    >
                        <option value="24">24px</option>
                        <option value="32">32px</option>
                        <option value="48">48px</option>
                        <option value="64">64px</option>
                    </select>
                </label>
            </div>
        )
    }
}

export default TileSize
