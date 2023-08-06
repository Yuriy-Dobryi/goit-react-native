// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFwhuflwHvQtrV66ljQ1BhLpRJGrbLK5c",
  authDomain: "hw-goit-react-nativee.firebaseapp.com",
  projectId: "hw-goit-react-nativee",
  storageBucket: "hw-goit-react-nativee.appspot.com",
  messagingSenderId: "722246677313",
  appId: "1:722246677313:web:a40978aba16f52e5dca7c0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);