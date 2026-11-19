// ==========================================
// إعدادات الاتصال بـ Firebase — كشتات عايلة الكري
// ==========================================
// مهم جداً: أنشئ مشروعك الخاص في Firebase (مجاني) وضع بياناتك هنا.
// الطريقة: console.firebase.google.com → إضافة مشروع → إضافة تطبيق ويب → انسخ بيانات التطبيق.
// ثم فعّل من القائمة: Firestore Database + Storage.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-storage.js";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
