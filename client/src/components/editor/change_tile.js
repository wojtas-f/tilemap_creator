import React, { Component, Fragment } from 'react'

import grass from '../../tiles/g_grass1.png'
import water from '../../tiles/g_water1.png'
import empty from '../../tiles/g_empty.png'

class ChangeTile extends Component {
    selectTile = tile_number => {
        //console.log(tile_number)
        this.props.changeSelectedTile(tile_number)
    }
    render() {
        return (
            <Fragment>
                <div className="change_tile_window-bgc">
                    <div className="change_tile_window">
                        <h1>Hello change tile</h1>
                        <img
                            src={empty}
                            alt="empty"
                            className="tile"
                            onClick={() => this.selectTile(0)}
                        />
                        <img
                            src={water}
                            alt="water"
                            className="tile"
                            onClick={() => this.selectTile(1)}
                        />
                        <img
                            src={grass}
                            alt="grass"
                            className="tile"
                            onClick={() => this.selectTile(2)}
                        />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ChangeTile
