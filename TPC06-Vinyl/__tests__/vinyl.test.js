


const { doesNotMatch } = require('assert')
const fs = require('fs')
const urllib = require('urllib')

const LASTFM_MUSE_TOP_TRACKS_FILE = './__tests__/data/lastfm_muse_getTopTracks.json'
const LASTFM_KILLERS_TOP_TRACKS_FILE = './__tests__/data/lastfm_killers_getTopTracks.json'
const LASTFM_NEW_ORDER_TOP_TRACKS_FILE = './__tests__/data/lastfm_new_order_getTopTracks.json'

const LASTFM_FOO_FIGHTERS_SEARCH_ARTIST_FILE='./__tests__/data/lastfm_foo_fighters_searchArtist.json'

const USERS_FILE_GET_TOP_TRACKS='./__tests__/data/vinyl_users_getTopTracks.json'



jest.mock('urllib')

test('get top tracks from an existing artist', done=>{
    urllib.request.mockImplementationOnce((_, cb)=> fs.readFile(LASTFM_MUSE_TOP_TRACKS_FILE, cb))
            .mockImplementationOnce((_, cb)=> fs.readFile(LASTFM_KILLERS_TOP_TRACKS_FILE, cb))
            .mockImplementationOnce((_, cb)=> fs.readFile(LASTFM_NEW_ORDER_TOP_TRACKS_FILE, cb))
    const vinyl=require('./../lib/vinyl')(USERS_FILE_GET_TOP_TRACKS)
    vinyl.getTopTracks('gamboa', 2, (err, tracks)=>{
        expect(err).toBeFalsy()
        expect(tracks.length).toBe(6)
        done()
    })
})

test('try getting the top tracks from a user that doesnt exist', done=>{
    const vinyl=require('./../lib/vinyl')(USERS_FILE_GET_TOP_TRACKS)
    vinyl.getTopTracks('Maria Papoila', 1, (err, tracks)=>{
        expect(err).toBeTruthy()
        done()
    })
})

test('add artist of an existing artist to an existing user', done=>{
    const vinyl=require('./../lib/vinyl')(USERS_FILE_GET_TOP_TRACKS)
    urllib.request.mockImplementationOnce((_, cb)=> fs.readFile(LASTFM_FOO_FIGHTERS_SEARCH_ARTIST_FILE, cb))
    vinyl.addArtist('Manel','Foo Fighters',(err, user)=>{
        expect(err).toBeFalsy();
        expect(user.username).toBe('Manel')
        expect(user.artists.includes('Foo Fighters')).toBeTruthy()
        done()
    })
})

/*test('try adding an artist that doesnt exist to an existing user', done=>{
    
})

test('try adding an existing artist to a user that doesnt exist', done=>{

})*/