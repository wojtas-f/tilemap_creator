import React, { Component } from 'react'

class LayerSelection extends Component {
    state = {
        active_layer: 'ground_layer',
        layers: [
            {
                type: 'ground_layer',
                name: 'Ground Layer',
                id: 0
            },
            {
                type: 'player_layer',
                name: 'Player Layer',
                id: 1
            },
            {
                type: 'overlay_layer',
                name: 'Overlay Layer',
                id: 2
            }
        ]
    }

    handleChange = event => {
        const active_layer = event.target.value

        this.setState({
            active_layer
        })

        this.props.handleLayerChange(active_layer)
    }

    renderRadioList = () => {
        let list = this.state.layers.map(layer => {
            let style

            if (layer.type === this.state.active_layer) {
                style =
                    'ui__section_radio-list-item ui__section_radio-list-item--active'
            } else {
                style = 'ui__section_radio-list-item'
            }

            return (
                <li className={style} key={layer.id}>
                    <label>
                        <input
                            type="radio"
                            value={layer.type}
                            checked={this.state.active_layer === layer.type}
                            onChange={this.handleChange}
                        />
                        {layer.name}
                    </label>
                </li>
            )
        })
        return list
    }

    render() {
        let list = this.renderRadioList()
        return (
            <div className="ui__section">
                <p className="ui__section_title">Select Active Layer:</p>
                <ul className="ui__section_radio-list">{list}</ul>
            </div>
        )
    }
}

export default LayerSelection
