const cache=new Map();module.exports={get(path){return cache.get(path)},update(path,content){cache.set(path,content)}}
