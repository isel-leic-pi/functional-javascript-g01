/* eslint-disable no-undef */
'use strict'

const fs = require('fs')
const urllib = require('urllib')
const lastfm = require('../lib/lastfm')

const LASTFM_TOP_TRACKS_FILE = './__tests__/data/lastfm_muse_getTopTracks.json'
const LASTFM_SEARCH_ARTIST_FILE = './__tests__/data/lastfm_led+zeppelin_searchArtist.json'

jest.mock('urllib')

const TOP_TRACKS = [
    'Supermassive Black Hole',
    'Starlight',
    'Time Is Running Out'
]

test('lastfm getTopTracks', done => {
    urllib.request.mockImplementationOnce((_, cb) => fs.readFile(LASTFM_TOP_TRACKS_FILE, cb))
    lastfm.getTopTracks('muse', (err, data) => {
        expect(err).toBeFalsy()

        const top3 = data.slice(0, 3)
        TOP_TRACKS.forEach((t, i) => {
            expect(top3[i]).toBe(t)
        })

        done()
    })
})

test('lastfm getTopTracks request error', done => {
    urllib.request.mockImplementationOnce((_, cb) => cb(new Error('test error')))
    lastfm.getTopTracks('muse', err => {
        expect(err).toBeTruthy()
        done()
    })
})

const ARTIST = 'Led Zeppelin'

test('lastfm searchArtist', done => {
    urllib.request.mockImplementationOnce((_, cb) => fs.readFile(LASTFM_SEARCH_ARTIST_FILE, cb))
    lastfm.searchArtist('led zeppelin', (err, data) => {
        expect(err).toBeFalsy()
        expect(data.some(a => a.name === ARTIST)).toBeTruthy()
        done()
    })
})

test('lastfm searchArtist request error', done => {
    urllib.request.mockImplementationOnce((_, cb) => cb(new Error('test error')))
    lastfm.searchArtist('led zeppelin', err => {
        expect(err).toBeTruthy()
        done()
    })
})
