const users = require('../lib/users')('./__tests__/data/users.json')



test('Get\'s user', (done) => {

    users.getUser('gamboa', (err,user) => {
        if(err) fail(err)
        else expect(user.username).toBe('gamboa')
        done()
    })
})

test('Adds user', (done) => {

    users.addUser('gamboa', (err,user) => {
        if(err) { 
            expect(err.toString()).toBe('Error: User gamboa already exists!')
            expect(user).toBeUndefined()
        } else fail()

        done()
    })
})

test('Adds existing user', (done) => {

    users.addUser('gamboa', (err,user) => {
        if(err) { 
            expect(err.toString()).toBe('Error: User gamboa already exists!')
            expect(user).toBeUndefined()
        } else fail()

        done()
    })
})

test('Adds artist', (done) => {

    users.addArtist('gamboa', 'Frank Sinatra',(err,user) => {
        if(err) fail(err)
        else expect(user.artists.includes('Frank Sinatra'))
        done()
    })
})
