import React, { Component } from 'react'
import grass from '../tiles/g_grass1.png'
import water from '../tiles/g_water1.png'
import empty from '../tiles/g_empty.png'

class Tile extends Component {
    state = {
        tiles_img: [empty, water, grass],
        tile: {
            type: 2
        }
    }

    changeTile = () => {
        let tile = this.state.tile
        if (tile.type === 1) {
            tile.type = 2
        } else {
            tile.type = 1
        }

        this.setState(tile)
        console.log(this.state.tile)
        console.log(this.state.tile)
    }

    render() {
        return (
            <React.Fragment>
                <img
                    src={this.state.tiles_img[this.state.tile.type]}
                    alt="grass"
                    className="tile"
                    onClick={this.changeTile}
                />
            </React.Fragment>
        )
    }
}

export default Tile
