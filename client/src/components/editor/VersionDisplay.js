import React, { Component } from 'react'

class VersionDisplay extends Component {
    state = {
        version: {
            server: '1.0.0',
            client: '1.0.0'
        }
    }

    componentDidMount() {
        this.getVersion()
    }

    getVersion = async () => {
        const version = await fetch('/app/version').then(res => res.json())
        console.log(version)
        this.setState({ version })
    }

    render() {
        return (
            <div className="editor__version-display">
                <p className="editor__version-display_item">
                    Server version: {this.state.version.server}
                </p>
                <p className="editor__version-display_item">
                    Client version: {this.state.version.client}
                </p>
            </div>
        )
    }
}

export default VersionDisplay
