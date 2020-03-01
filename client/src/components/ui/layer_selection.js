import React, { Component, Fragment } from 'react'

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
            <Fragment>
                <p>Select active layer:</p>
                <ul>
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
                                value="particle_effects_layer"
                                checked={
                                    this.state.active_layer ===
                                    'particle_effects_layer'
                                }
                                onChange={this.handleChange}
                            />
                            Particle Effects Layer
                        </label>
                    </li>
                </ul>
            </Fragment>
        )
    }
}

export default LayerSelection
