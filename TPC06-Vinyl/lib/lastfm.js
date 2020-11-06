'use strict'

const urllib = require('urllib')

const LASTFM_HOST = 'http://ws.audioscrobbler.com/2.0/'
const LASTFM_KEY = '79b2506be8ce86d852882e1774f1f2e8'
const LASTFM_TOP_TRACKS = `${LASTFM_HOST}?method=artist.gettoptracks&format=json&api_key=${LASTFM_KEY}&artist=`
const LASTFM_SEARCH = `${LASTFM_HOST}?method=artist.search&api_key=${LASTFM_KEY}&format=json&artist=`

/**
 * @param {String} artist Name of the band or artist.
 * @param {function(Error, Array)} cb Callback receiving an array with tracks names or Error if not succeeded
 */
function getTopTracks(artist, cb) {
    const path = LASTFM_TOP_TRACKS + artist
    urllib.request(path, (err, data) => {
        if(err) return cb(err)
        const obj = JSON.parse(data)
        cb(null, obj.toptracks.track.map(t => t.name))
    })
}

/**
 * Search for 
 * @param {String} artist 
 * @param {function(Error, Array)} cb 
 */
function searchArtist(artist, cb) {
    const artistSearch = `${LASTFM_SEARCH}${artist}`
    urllib.request(artistSearch, (err, data) => {
        if (err) return cb(err)
        const obj = JSON.parse(data).results
        const artists = obj.artistmatches.artist
        cb(err, artists)
    })
}

module.exports = {
    getTopTracks,
    searchArtist
}