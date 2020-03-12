const { version: serverVersion } = require('../../package.json')
const { version: clientVersion } = require('../../client/package.json')

exports.getAppVersion = (req, res) => {
    const version = {
        server: serverVersion,
        client: clientVersion
    }

    res.send(version)
}
