'use strict'

const fs = require('fs')

let usersPath = './data/users.json'

/**
 * @typedef User
 * @property {String} username
 * @property {Array} artists Array of strings with artists names.
 */
/**
 * @param {String} username 
 * @param {function(Error, User)} cb 
 */
function getUser(username, cb) {
    fs.readFile(usersPath, (err, buffer) => {
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        const selected = arr.filter(user => user.username == username)
        if(selected.length == 0) return cb(null, null)
        cb(null, selected[0])
    })
}

/**
 * @param {function(Error, User)} cb 
 */
function getUsers(cb) {
    fs.readFile(usersPath, (err, buffer) => {
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        cb(null, arr)
    })
}

/**
 * Add a new User object with given username if it does not exist yet.
 * Returns an Error if that username already exist.
 * @param {String} username 
 * @param {function(Error)}
 */
function addUser(username, cb) {
    fs.readFile(usersPath, (err, buffer)=>{
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        const selected = arr.filter(user => user.username == username)
        if(selected.length != 0) return cb(new Error('User ' + username + ' already exists.'))
        arr.push({'username': username, 'artists':[]})
        fs.writeFile(usersPath, JSON.stringify(arr), (err)=>{
            if(err) return cb(err)
            cb(null)
        })
    })
}

/**
 * Adds a new artist name to the array of artists of the User with 
 * given username.
 * I does not verify repetitions among artists.
 * 
 * @param {String} username 
 * @param {String} artist 
 * @param {function(Error, User)} cb 
 */
function addArtist(username, artist, cb) {
    fs.readFile(usersPath, (err, buffer)=>{
        if(err) return cb(err)
        const arr = JSON.parse(buffer)
        const selected = arr.filter(user => user.username == username)
        if(selected.length == 0) return cb(new Error('There is no user ' + username))
        const newArr=arr.map(user => {
            if(user.username == username)
                user.artists.push(artist)
            return user
        })
        fs.writeFile(usersPath, JSON.stringify(newArr), (err)=>{
            if(err) return cb(err)
        })
        cb(null, selected[0])
    })
}

function init(path) {
    if(path) usersPath = path
    return API
}
const API = {
    init,
    getUser,
    getUsers,
    addArtist,
    addUser
}

module.exports = API