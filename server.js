const app = require('./app')

const port = process.env.PORT || 5000

const { version } = require('./package.json')

app.listen(port, () =>
    console.log(`Server started on port ${port}. App version: ${version}`)
)
