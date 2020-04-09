import React, { Component } from 'react'

import HelpButton from './HelpButton'
import GitButton from './GitButton'

class ButtonBar extends Component {
    render() {
        return (
            <div className="ui__button-bar">
                <HelpButton />
                <GitButton />
            </div>
        )
    }
}

export default ButtonBar
