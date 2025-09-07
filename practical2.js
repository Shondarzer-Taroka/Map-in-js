const userSessions = new Map()

function getuser(userId, sessionData) {
    userSessions.set(userId, {
        ...sessionData,
        loginTime: new Date(),
        lastActivity: new Date()
    })
}


function updateUserActivity(userId) {
    if (userSessions.has(userId)) {
        let session = userSessions.get(userId)
        console.log(session);

        session.lastActivity = new Date()
         userSessions.set(userId, session);
    }
}

updateUserActivity('sakib123')
updateUserActivity('sakib38475')


getuser('sakib123', { role: 'admin', username: 'sakibalhasan', phone: 84237467 })

updateUserActivity('sakib123')
console.log(userSessions.get('sakib123'));
