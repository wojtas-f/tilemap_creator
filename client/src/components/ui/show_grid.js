import React, { Component } from 'react'

class ShowGrid extends Component {
    state = {
        show: true
    }
    handleChange = () => {
        let show = !this.state.show
        this.setState({ show })
    }

    componentDidUpdate() {
        this.props.handleGridOpacityChange(this.state.show)
    }

    render() {
        return (
            <div className="ui__show-grid">
                <p className="ui__show-grid_title">Show Grid</p>
                <div className="ui__show-grid_checkbox">
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
