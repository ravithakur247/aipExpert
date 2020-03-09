const express = require('express');
const { init } = require('./middleware/index');
const env = require('./environment/environment');

async function startServer() {
    const app = express();
    await init(app);
    app.listen(3000, () => console.log(`Server Started on ${env.PORT} port`))

}
startServer();
