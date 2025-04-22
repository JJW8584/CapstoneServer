//푸시알림
const admin = require('firebase-admin');
const path = require('path');

const serviceAccount = require(path.join(__dirname, '..', 'firebase-adminsdk.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.sendNotificationToAll = async (tokens, title, body) => {
  const messages = tokens.map(token => ({
    token,
    notification: { title, body }
  }));

  const response = await admin.messaging().sendEach(messages);
  console.log(`푸시 전송 완료: ${response.successCount}건`);
};
