// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYT-gNBew6v1UA4dfzpviarvNYQWGI4Ns",
  authDomain: "hw-goit-react-native.firebaseapp.com",
  databaseURL:
    "https://hw-goit-react-native-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hw-goit-react-native",
  storageBucket: "hw-goit-react-native.appspot.com",
  messagingSenderId: "790411895485",
  appId: "1:790411895485:web:5983b39b9aea8224eb0dd4",
  measurementId: "G-9LQCJT9CLL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);