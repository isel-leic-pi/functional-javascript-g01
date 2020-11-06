'use strict'

const lastfm = require('./lib/lastfm')
const users = require('./lib/users')
const vinyl = require('./lib/vinyl')

users.getUser('gamboa', (err, user) => {
    if (err) return console.error(err);
    console.log(user)
})

vinyl.addArtist('Manel', 'Dream Theater', (err, user)=>{
    if(err)console.log(err)
    else console.log(user)
})

lastfm.getTopTracks('weekend', (err, tracks) => {
    if(err) console.log(err)
    else tracks.forEach(t => console.log(t))
})

lastfm.searchArtist('muse', (err, artists) => {
    if(err) console.log(err)
    else artists.forEach(t => console.log(t))
})

/*vinyl.getTopTracks('gamboa', 5, (err, tracks) => {
    if(err) console.log(err)
    else tracks.forEach(t => console.log(t))
})*/

//users.addArtist('Manel', 'linkin park', (err, user) => console.log(err || user))
//users.getUser('gamboa', (err, user) => console.log(err || user))
users.addUser('abc', (err, user) => console.log(err || user))
//users.getUser('Manel', (err, user) => console.log(err || user))
//
