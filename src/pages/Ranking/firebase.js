import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqfNOpVNGAzorp5_0tuaI1QDd0WDZXqSo",
  authDomain: "receibareceitas.firebaseapp.com",
  projectId: "receibareceitas",
  storageBucket: "receibareceitas.appspot.com",
  messagingSenderId: "21963335608",
  appId: "1:21963335608:web:6ad28cb59e8e253b13d14d",
  measurementId: "G-KQKYLWV1Z9",
};

const app = initializeApp(firebaseConfig);

export default app;