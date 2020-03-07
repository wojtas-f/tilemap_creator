import React, { Component } from 'react'

class GridTile extends Component {
    state = {
        width: 32,
        height: 32
    }
    componentDidUpdate() {
        if (this.props.tileSize !== this.state.width) {
            this.setState({
                width: this.props.tileSize,
                height: this.props.tileSize
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div
                    className="tile grid-layer__tile"
                    style={{
                        width: this.state.width,
                        height: this.state.height
                    }}
                />
            </React.Fragment>
        )
    }
}

export default GridTile
