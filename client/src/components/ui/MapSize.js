import React, { Component } from 'react'

/**
 * Control the size on the map (width and height is counted with tiles)
 */
class MapSize extends Component {
    state = {
        width: 20,
        height: 20
    }

    handleChange = event => {
        let size = parseInt(event.target.value)
        this.props.handleMapScaling(size)
        this.setState({ tileSize: size })
    }

    render() {
        return (
            <div className="ui__map-size">
                <p className="ui__map-size_title">Map size:</p>
                <form>
                    <label className="ui__map-size_label">
                        Width:
                        <input
                            type="text"
                            name="width"
                            className="ui__map-size_label_input"
                        />
                        tiles
                    </label>
                    <label className="ui__map-size_label">
                        Height:
                        <input
                            type="text"
                            name="height"
                            className="ui__map-size_label_input"
                        />
                        tiles
                    </label>

                    <input type="submit" value="Save"></input>
                </form>
            </div>
        )
    }
}

export default MapSize
