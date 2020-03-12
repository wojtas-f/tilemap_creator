import React, { Component } from 'react'

/**
 * Control the size on the map (width and height is counted with tiles)
 */
class MapSize extends Component {
    state = {
        size: [0, 0]
    }

    handleChange = event => {
        event.preventDefault()
        let size = []
        size[0] = parseInt(event.target.width.value)
        size[1] = parseInt(event.target.height.value)
        this.props.handleMapSize(size)
        this.setState({ tileSize: size })
    }

    render() {
        return (
            <div className="modal-window">
                <p className="modal-window_title">Map Size:</p>
                <form
                    className="modal-window_form"
                    onSubmit={this.handleChange}
                >
                    <label className="modal-window_form_label">
                        <input
                            type="text"
                            name="width"
                            className="modal-window_form_label_input"
                            placeholder="Width"
                        />
                    </label>
                    <label className="modal-window_form_label">
                        <input
                            type="text"
                            name="height"
                            className="modal-window_form_label_input"
                            placeholder="Height"
                        />
                    </label>

                    <input
                        type="submit"
                        value="Save"
                        className="modal-window_form_button"
                    ></input>
                </form>
            </div>
        )
    }
}

export default MapSize
