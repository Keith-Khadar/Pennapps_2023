import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.error(err);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
};

export const isSignedIn = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // The user is signed in
        resolve(true);
      } else {
        // The user is not signed in
        resolve(false);
      }
    });
  });
};

export const signIn = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Try a different email or password.");
  }
};

export const forgotPassword = (email) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      alert("Password Reset Email Sent!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error! Check that you have entered an Email.");
    });
};
