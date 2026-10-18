// ============================================================================
// Fabrics by Sobia — Firebase configuration
// ----------------------------------------------------------------------------
// HOW TO USE:
//  1. Create a free Firebase project at https://console.firebase.google.com
//  2. Add a Web app ( </> ) to the project and copy its config values
//  3. Paste them below, replacing each PASTE_YOUR_* placeholder
//  4. Commit/push this file — the shop and admin panel will connect
//
// Until real values are pasted, the site runs in "not configured" mode:
// it shows elegant empty states and logs one console warning. No errors.
// ============================================================================

const firebaseConfig = {
  apiKey: "AIzaSyB0e9DmcoZmRv9_ISjHPTN9Rn1j54pYy8k",
  authDomain: "fabrics-by-sobia.firebaseapp.com",
  projectId: "fabrics-by-sobia",
  storageBucket: "fabrics-by-sobia.firebasestorage.app",
  messagingSenderId: "96539953272",
  appId: "1:96539953272:web:b29088af43ed5757bcc58d"
};

// True only when the owner has pasted real values above.
const FIREBASE_CONFIGURED =
  typeof firebaseConfig !== "undefined" &&
  firebaseConfig.apiKey !== "PASTE_YOUR_API_KEY" &&
  firebaseConfig.projectId !== "PASTE_YOUR_PROJECT_ID";
