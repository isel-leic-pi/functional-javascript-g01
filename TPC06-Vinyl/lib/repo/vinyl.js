'use strict'

const lastfm = require('./lastfm')
let users = require('./users')

function init(path) {
    if(path) users = require('./users').init(path)
    return {
        getTopTracks,
        addArtist
    }
}

/**
 * Returns an array with limit top tracks of each favourite artist
 * of the User with username.
 * 
 * @param {String} username 
 * @param {Number} limit 
 * @param {function(Error, Array)} cb 
 */
function getTopTracks(username, limit, cb) {
    users.getUser(username, (err, user)=>{
        if(err) return cb(err)
        if(user==null)return cb(new Error(`User ${username} doesn't exist`))
        let topTracks=[]
        let count=0
        user.artists.forEach(artist=>{
            lastfm.getTopTracks(artist, (err, tracks)=>{
                if(err) return cb(err)
                topTracks=topTracks.concat(tracks.slice(0, limit))
                count++
                if(count==user.artists.length)
                    cb(null, topTracks)
            })
            
        })
        
    })
}

function addArtist(username, artist, cb){
    lastfm.searchArtist(artist, (err, matches)=>{
        if(err) return cb(err)
        if(matches.length==0) return cb(new Error('artist '+artist+' not found'))
        users.addArtist(username, artist, (err, user)=>{
            if(err) return cb(err)
            cb(null, user)
        })
    })
}

module.exports = {
    init
}