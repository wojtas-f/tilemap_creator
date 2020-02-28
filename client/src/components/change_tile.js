import React, { Component, Fragment } from 'react'

import grass from '../tiles/g_grass1.png'
import water from '../tiles/g_water1.png'
import empty from '../tiles/g_empty.png'

class ChangeTile extends Component {
    selectTile = valu => {
        console.log(valu)
    }
    render() {
        return (
            <Fragment>
                <div className="change_tile_window">
                    <h1>Hello change tile</h1>
                    <img
                        src={grass}
                        alt="grass"
                        className="tile"
                        onClick={() => this.selectTile(1)}
                    />
                    <img
                        src={water}
                        alt="water"
                        className="tile"
                        onClick={() => this.selectTile(2)}
                    />
                    <img
                        src={empty}
                        alt="empty"
                        className="tile"
                        onClick={() => this.selectTile(3)}
                    />
                </div>
            </Fragment>
        )
    }
}

export default ChangeTile
