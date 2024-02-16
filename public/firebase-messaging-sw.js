importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')
// // Initialize the Firebase app in the service worker by passing the generated config

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFXt6NdolKYKDU1oSAr52LWbxrFPUIFtI",
  authDomain: "comradespower.firebaseapp.com",
  projectId: "comradespower",
  storageBucket: "comradespower.appspot.com",
  messagingSenderId: "595820915878",
  appId: "1:595820915878:web:4d29f3c11d5cc91628d867",
  measurementId: "G-8DRLG3780D"
};


firebase?.initializeApp(firebaseConfig)


// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
  console.log('Hello world from the Service Worker :call_me_hand:');
});

// Handle background messages
self.addEventListener('push', function (event) {
  const payload = event.data.json();
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  event.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  );
});