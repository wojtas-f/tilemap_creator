import React, { Component } from 'react'

/**
 * Control the size on the map (width and height is counted with tiles)
 */
class MapSize extends Component {
    state = {
        size: [0, 0],
        errorMessage: null
    }

    validateInput = (width, height) => {
        let errorMessage = ''
        if (width < 10) {
            errorMessage += 'Width must be longer than 10. '
        } else if (width > 30) {
            errorMessage += 'Width can not be longer than 30. '
        }

        if (height < 10) {
            errorMessage += 'Height must be longer than 10. '
        } else if (height > 30) {
            errorMessage += 'Height can not be longer than 30. '
        }

        if (errorMessage) {
            this.setState({ errorMessage })
            return false
        } else {
            return true
        }
    }

    handleChange = event => {
        event.preventDefault()
        let size = []
        size[0] = parseInt(event.target.width.value)
        size[1] = parseInt(event.target.height.value)
        if (this.validateInput(size[0], size[1])) {
            this.props.handleMapSize(size)
            this.setState({ tileSize: size, errorMessage: null })
        }
    }

    render() {
        return (
            <div className="modal-window">
                <p className="modal-window_title">Map Size:</p>
                <p className="modal-window_error">{this.state.errorMessage}</p>
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
