'use strict'

const lastfm = require('./lib/lastfm')
const users = require('./lib/users')
const vinyl = require('./lib/vinyl')

vinyl.addArtist('Manel', 'Dream Theater', (err, user)=>{
    if(err)console.log(err)
    else console.log(user)
})

/*lastfm.getTopTracks('weekend', (err, tracks) => {
    if(err) console.log(err)
    else tracks.forEach(t => console.log(t))
})*/
/*lastfm.searchArtist('muse', (err, tracks) => {
    if(err) console.log(err)
    else tracks.forEach(t => console.log(t))
})*/
/*vinyl.getTopTracks('gamboa', 5, (err, tracks) => {
    if(err) console.log(err)
    else tracks.forEach(t => console.log(t))
})*/
//users.addArtist('Manel', 'linkin park', (err, user) => console.log(err || user))
//users.getUser('gamboa', (err, user) => console.log(err || user))
//users.addUser('Manel', (err, user) => console.log(err || user))
//users.getUser('Manel', (err, user) => console.log(err || user))
//
