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
            <div className="ui__section">
                <p className="ui__section_title">Map Size:</p>
                <form className="ui__section_form">
                    <label className="ui__section_form_label">
                        <input
                            type="text"
                            name="width"
                            className="ui__section_form_label_input"
                            placeholder="Width"
                        />
                        tiles
                    </label>
                    <label className="ui__section_form_label">
                        <input
                            type="text"
                            name="height"
                            className="ui__section_form_label_input"
                            placeholder="Height"
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
