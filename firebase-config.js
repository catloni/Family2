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
  apiKey: "AIzaSyCmf7s7KCKPkkRabOuSA5AqgFStsJp5r24",
  authDomain: "alkri-places.firebaseapp.com",
  projectId: "alkri-places",
  storageBucket: "alkri-places.firebasestorage.app",
  messagingSenderId: "84427486998",
  appId: "1:84427486998:web:1dca093c52c9365ac78237",
  measurementId: "G-9HBT4BBB3J"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
