const {Dropbox}=require('dropbox');const {dropboxToken}=require('./env');module.exports=new Dropbox({accessToken:dropboxToken,fetch:require('node-fetch')})
