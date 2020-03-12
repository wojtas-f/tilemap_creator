import React, { Component } from 'react'

/**
 *  Control grid visibility
 */
class ShowGrid extends Component {
    state = {
        show: true
    }

    componentDidUpdate() {
        this.props.handleGridOpacityChange(this.state.show)
    }

    handleChange = () => {
        let show = !this.state.show
        this.setState({ show })
    }

    render() {
        return (
            <div className="ui__section">
                <p className="ui__section_title">Show Grid</p>
                <div className="ui__section_checkbox">
                    <label>
                        <input
                            type="checkbox"
                            checked={this.state.show === true}
                            onChange={this.handleChange}
                        />
                        Show Grid
                    </label>
                </div>
            </div>
        )
    }
}

export default ShowGrid
