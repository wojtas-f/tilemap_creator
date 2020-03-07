import React, { Component } from 'react'

class LocationNames extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title
        }
    }

    componentDidUpdate() {
        if (this.props.title !== this.state.title) {
            this.setState({ title: this.props.title })
        }
    }

    render() {
        return (
            <div className="location-name">
                <h3 className="location-name__title">{this.state.title}</h3>
                <div className="location-name__dot"></div>
            </div>
        )
    }
}

export default LocationNames
