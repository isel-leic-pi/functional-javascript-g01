function loadUsers(userIds, load, done) {
    let users = []
    let count = 0
    userIds.forEach((userId, idx) => load(userId,   //for each userId in the array userIds, load a user with a loading function
        function(user){                             //the loading function receives a user
            users[idx]=user                         //add the user
            count++                                 //count the added user
        }))
    done(users)                                     //finalize the adding operation
    /*for (var i = 0; i < userIds.length; i++) {
      users.push(load(userIds[i]))
    }
    return users*/
}

module.exports = loadUsers