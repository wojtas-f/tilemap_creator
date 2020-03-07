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
            <div className="ui__scale-map">
                <p className="ui__scale-map_title">Tile size:</p>
                <label>
                    px:
                    <select
                        value={this.state.tileSize}
                        onChange={this.handleChange}
                        className="ui__scale-map_select"
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
