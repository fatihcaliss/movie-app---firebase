import toast from "react-hot-toast";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSASING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const register = async (email, password, name, lname, navigate) => {
    try {
        createUserWithEmailAndPassword(auth, email, password, name, lname)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/");
            })
    } catch (error) {
        toast.error(error);
    }

}
export const login = async (email, password, navigate) => {
    try {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                toast.success("You successfully logged in. 😎");
                navigate("/");
            })
    } catch (error) {
        toast.error("error");
    }

}
export const currentUser = (setUser) => {
    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser("")
            }
        });
    } catch (error) {
        toast.error(error);
    }
}
export const logout = () => {
    try {
        signOut(auth)
            .then(() => {
                toast.success("You successfully logged out. 👻");
            })
            .catch((error) => {
                // An error happened.
            });
    } catch (error) {
        toast.error(error);
    }
}
const provider = new GoogleAuthProvider();
export const googleProvider = (navigate) => {
    try {
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                toast.success("You successfully logged in. 😎");
                navigate("/");
            })
            .catch((error) => {
                // Handle Errors here.
                toast.error(error);
            });
    } catch (error) {
        toast.error(error);
    }
}
