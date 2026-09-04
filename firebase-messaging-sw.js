importScripts(
  "https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDhpZJ1z2j74khtWMo9hIpo1WHgAaFzwCc",
  authDomain: "bangla-pathsala.firebaseapp.com",
  projectId: "bangla-pathsala",
  storageBucket: "bangla-pathsala.firebasestorage.app",
  messagingSenderId: "179169472629",
  appId: "1:179169472629:web:74d0a999c7c07a6147c83c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notification = payload.notification || {};

  self.registration.showNotification(
    notification.title || "বাংলা পাঠশালা",
    {
      body: notification.body || "",
      icon: "/icon-192.png"
    }
  );
});
