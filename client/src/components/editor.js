import React, { Component } from 'react'

import Tilemap from './editor/tilemap'
import UI from './ui/ui'

class Editor extends Component {
    state = {
        showGrid: true
    }
    handleGridOpacityChange = show => {
        if (this.state.showGrid !== show) {
            this.setState({ showGrid: show })
        }
        console.log('Opacity: ', show)
    }
    render() {
        return (
            <div className="App">
                <UI handleGridOpacityChange={this.handleGridOpacityChange} />
                <Tilemap showGrid={this.state.showGrid} />
            </div>
        )
    }
}

export default Editor
