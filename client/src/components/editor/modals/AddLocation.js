import React, { Component } from 'react'

class AddLocation extends Component {
    state = {
        locationName: '',
        errorMessage: ''
    }

    handleChange = e => {
        e.preventDefault()
        const title = e.target[0].value
        if (title.length > 2 && title.length < 50) {
            this.setState({ locationName: title, errorMessage: '' })
        } else {
            this.setState({
                errorMessage: 'Location name must be between 2-50 characters'
            })
        }
        this.props.addLocationAndCloseMenu(title)
    }

    render() {
        return (
            <div className="modal-window">
                <p className="modal-window_title">Add location</p>
                <form
                    onSubmit={this.handleChange}
                    className="modal-window_form"
                >
                    {this.state.errorMessage ? (
                        <div className="add-location_form_error">
                            {this.state.errorMessage}
                        </div>
                    ) : (
                        ''
                    )}

                    <input
                        type="text"
                        name="locationName"
                        placeholder="Enter location name"
                        className="modal-window_form_input"
                    />

                    <button type="submit" className="modal-window_form_button">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default AddLocation
