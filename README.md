# mongodb-storage

### node-project setup

#### initialize node project
This installs a package.json

    npm init


#### npm installs

    npm i express nodemon

#### `folder structure` :

    | - server.js
    | - package.json
    | - package-lock.json
    | - public 
    |  | - index.html
    |  | - styles.css
    |  | - script.js

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
    




##TAILWIND SETTUP

#### for npm
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

#### Create 

    css/tailwind.css

#### run `build` using tailwindcss-cli

    npx tailwindcss-cli build -i css/tailwind.css -o ./public/style.css


### Three Tailwind Layers

    @tailwind base;         // css-reset (to look same in all browsers)
    @tailwind components;   // .container (one-and-only class component : a responsive max-width container)
    @tailwind utilities;    // for all the utillty classes : pt-4, shadow-sm, grid-cols-11 ...