import React, { Component } from 'react'

class ScaleMap extends Component {
    state = {
        scale: 1
    }

    handleChange = event => {
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="ui__scale-map">
                <p className="ui__scale-map_title">Map scale:</p>
                <label>
                    Scale:
                    <select
                        value={this.state.value}
                        onChange={this.handleChange}
                        className="ui__scale-map_select"
                    >
                        <option value="1">100%</option>
                        <option value="1.1">110%</option>
                        <option value="1.2">120%</option>
                        <option value="1.3">130%</option>
                        <option value="1.4">140%</option>
                        <option value="1.5">150%</option>
                    </select>
                </label>
            </div>
        )
    }
}

export default ScaleMap
