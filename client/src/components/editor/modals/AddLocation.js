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
            <div className="add-location">
                <form onSubmit={this.handleChange}>
                    {this.state.errorMessage ? (
                        <div className="add-location_error">
                            {this.state.errorMessage}
                        </div>
                    ) : (
                        ''
                    )}
                    <label>
                        <input
                            type="text"
                            name="locationName"
                            placeholder="Enter location name"
                        />
                    </label>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default AddLocation
