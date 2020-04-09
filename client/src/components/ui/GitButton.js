import React, { Component } from 'react'

import git_icon from '../../tiles/git-icon.png'

class GitButton extends Component {
    render() {
        return (
            <a href="https://github.com/Vulpie">
                <div className="ui-button-bar_item">
                    <img src={git_icon} alt="GitHub logo" />
                </div>
            </a>
        )
    }
}

export default GitButton
