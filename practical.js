// Tracking user sessions
const userSessions = new Map();
function loginUser(userId, sessionData) {
  userSessions.set(userId, {
    ...sessionData,
    loginTime: new Date(),
    lastActivity: new Date()
  });
}
function updateUserActivity(userId) {
  if (userSessions.has(userId)) {
    const session = userSessions.get(userId);
    session.lastActivity = new Date();
    userSessions.set(userId, session);
  }
}
function logoutUser(userId) {
  userSessions.delete(userId);
}

// Usage
loginUser('user123', { username: 'john_doe', role: 'admin' });
updateUserActivity('user123');
console.log(userSessions.get('user123'));
console.log(userSessions);