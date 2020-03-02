import React, { Component } from 'react'

class LayerSelection extends Component {
    state = {
        active_layer: 'ground_layer'
    }

    handleChange = event => {
        const active_layer = event.target.value
        //console.log(`Active layer: ${active_layer}`)

        this.setState({
            active_layer
        })
    }
    render() {
        return (
            <div className="ui__layer-selection">
                <p className="ui__layer-selection_title">
                    Select active layer:
                </p>
                <ul className="ui__layer-selection_list">
                    <li>
                        <label>
                            <input
                                type="radio"
                                value="ground_layer"
                                checked={
                                    this.state.active_layer === 'ground_layer'
                                }
                                onChange={this.handleChange}
                            />
                            Ground Layer
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="radio"
                                value="player_layer"
                                checked={
                                    this.state.active_layer === 'player_layer'
                                }
                                onChange={this.handleChange}
                            />
                            Player Layer
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="radio"
                                value="overlay_layer"
                                checked={
                                    this.state.active_layer === 'overlay_layer'
                                }
                                onChange={this.handleChange}
                            />
                            Overlay Layer
                        </label>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LayerSelection
