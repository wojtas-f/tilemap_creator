import React, { Component } from 'react'
import LayerSelection from './layer_selection'
import ShowGrid from './show_grid'

class UI extends Component {
    handleGridOpacityChange = show => {
        this.props.handleGridOpacityChange(show)
    }

    render() {
        return (
            <div className="ui">
                <LayerSelection />
                <ShowGrid
                    handleGridOpacityChange={this.handleGridOpacityChange}
                />
            </div>
        )
    }
}

export default UI
