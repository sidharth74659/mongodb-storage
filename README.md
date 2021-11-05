# mongodb-storage

### node-project setup

#### initialize node project
This installs a package.json

    npm init


#### npm installs

    npm i express nodemon

#### `folder structure` :

    - server.js
    - package.json
    - package-lock.json
    - public 
        - index.html
        - styles.css
        - script.js

#### scripts  in `package.json`

    "scripts": {
        "start": "nodemon server.js"
    },

#### `boilerplate` setup

    const express = require('express')
    const app = express()

    app.get('/', (req, res) => {
        //displays at localhost:<your_port_number>

        res.send('this is home')    
    })

    const PORT = process.env.PORT || 5500

    app.listen(PORT, () => {
        //displays in terminal

        console.log("server up & running");
    })
    