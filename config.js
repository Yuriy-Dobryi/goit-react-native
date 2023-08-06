// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbBhwktIYHI8xJRLUF3ZqSVaO1tJ-oOnA",
  authDomain: "goit-hw-react-nativee.firebaseapp.com",
  projectId: "goit-hw-react-nativee",
  storageBucket: "goit-hw-react-nativee.appspot.com",
  messagingSenderId: "380106588721",
  appId: "1:380106588721:web:d8e1f500f6b175d89e4b10",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);