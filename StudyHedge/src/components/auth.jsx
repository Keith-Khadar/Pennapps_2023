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
    if (err == "FirebaseError: Firebase: Error (auth/invalid-email).") {
      alert("Please enter a valid email.");
    }
    else if (err == "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).") {
      alert("Your password must contain at least 6 characters.");
    }
    else if (err == "FirebaseError: Firebase: Error (auth/email-already-in-use).") {
      alert("Incorrect password.");
    }
  }
};

export const forgotPassword = (email) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      alert("Password reset email sent!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (error.message == "Firebase: Error (auth/missing-email).") {
        alert("Please enter the email associated with your account.");
      }
    });
};
