const { Dropbox } = require("dropbox"); require("dotenv").config(); function createClient(){ return new Dropbox({ accessToken: process.env.DROPBOX_TOKEN }); } module.exports={createClient};
