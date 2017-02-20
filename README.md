# khl4express
This is the server for the [KHL4](https://github.com/muggezifter/khl4express/wiki/KHL4) multimedia installation

It is built using the [Express](https://expressjs.com/) framework. For persistance it uses [MongoDB](https://www.mongodb.com/) with [Mongoose](http://mongoosejs.com/) ODM

Start the server with `yarn start`

If you want to start the server while the pd clients are not available use `export NO_PD=true && yarn start`
