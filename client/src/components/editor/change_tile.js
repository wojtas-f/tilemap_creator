import React, { Component, Fragment } from 'react'

import grass_1 from '../../tiles/grass_1.png'
import grass_2 from '../../tiles/grass_2.png'
import grass_3 from '../../tiles/grass_3.png'
import grass_4 from '../../tiles/grass_4.png'
import road_1 from '../../tiles/road_h_left-end.png'
import road_2 from '../../tiles/road_h.png'
import road_3 from '../../tiles/road_h_right-end.png'
import road_4 from '../../tiles/road_v_top-end.png'
import road_5 from '../../tiles/road_v.png'
import road_6 from '../../tiles/road_v_bottom-end.png'

class ChangeTile extends Component {
    state = {
        tiles: [
            { name: grass_1, id: 0 },
            { name: grass_2, id: 1 },
            { name: grass_3, id: 2 },
            { name: grass_4, id: 3 },
            { name: road_1, id: 4 },
            { name: road_2, id: 5 },
            { name: road_3, id: 6 },
            { name: road_4, id: 7 },
            { name: road_5, id: 8 },
            { name: road_6, id: 9 }
        ]
    }
    selectTile = tile_number => {
        this.props.changeSelectedTile(tile_number)
    }
    render() {
        return (
            <Fragment>
                <div className="select-tile">
                    <div className="select-tile__menu">
                        <h1>Select tile</h1>
                        {this.state.tiles.map(tile => (
                            <img
                                key={tile.id}
                                src={tile.name}
                                alt="empty"
                                className="select-tile__menu_tile"
                                onClick={() => this.selectTile(tile.id)}
                            />
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ChangeTile
