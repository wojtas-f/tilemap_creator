/**
 * Create an array of tiles(objects)
 *
 * @param {number} width - width of the single tile
 * @param {number} height - height of the single tile
 * @returns {Array<Object>} - return array of tiles
 */
export function createArrayOfTiles(width, height) {
    let tiles = []
    let id = 0

    for (let i = 0; i < width; i++) {
        for (let index = 0; index < height; index++) {
            tiles.push({ id })
            id++
        }
    }

    return tiles
}

/**
 * Decides if the layer should be clickable or not
 *
 * @param {boolean} state_IsActive - allow interaction with this layer
 * @param {number} ground_width - size of this layer
 */
export function setActiveStyleWidth(state_IsActive, ground_width) {
    let activeStyle
    if (state_IsActive) {
        activeStyle = {
            pointerEvents: 'auto',
            width: ground_width
        }
    } else {
        activeStyle = {
            pointerEvents: 'none',
            width: ground_width
        }
    }
    return activeStyle
}
