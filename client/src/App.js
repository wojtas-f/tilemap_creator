import React from 'react'

import './App.css'
import Tilemap from './components/editor/tilemap'
import UI from './components/ui/ui'

function App() {
    return (
        <div className="App">
            <UI />
            <Tilemap />
        </div>
    )
}

export default App
