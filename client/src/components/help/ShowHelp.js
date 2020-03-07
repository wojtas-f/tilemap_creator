import React, { Component } from 'react'

import change_tile from '../../tutorial/change-tile.png'
import select_tile from '../../tutorial/select-tile.png'

class ShowHelp extends Component {
    render() {
        return (
            <div className="show-help">
                <div className="show-help__">
                    <h1>How to:</h1>
                    <ul>
                        <li>... change tile</li>
                        <li>... set location name</li>
                    </ul>
                </div>

                <div className="" id="">
                    <h3 className="">How to change the tile</h3>
                    <p>
                        First, select the image from "Select Tile" menu on the
                        left side of the screen
                    </p>
                    <img src={select_tile} alt="Tile selection menu" />
                    <p>
                        In the next step, left click on the tile you want to
                        change.
                    </p>
                    <img src={change_tile} alt="Editor fragment" />
                </div>
            </div>
        )
    }
}

export default ShowHelp
