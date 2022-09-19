import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendPasswordResetEmail} from "firebase/auth";
import { renderErrorMessage, setActiveScreen} from "../view/index"




export let createNewUser = (firstName, lastName, emailAddress, passwordAddress) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailAddress, passwordAddress)
        .then((userCredential) => {
            // Signed in 
            console.log(userCredential);
            const user = userCredential.user;
            renderErrorMessage("ok", "Đăng ký thành công")
            renderErrorMessage("server-error-messager", "")
            newName(firstName, lastName);
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            renderErrorMessage("server-error-messager", errorMessage)
            renderErrorMessage("ok", "")
            // ..
        });
}

export let createlogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        renderErrorMessage("erro_email", "")
        setActiveScreen('chatpage');
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        renderErrorMessage("erro_email", errorMessage);
        renderErrorMessage("erro_passwork", errorMessage);
    });
}

export let newName = (firstName ,lastName) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
    displayName: `${lastName} ${firstName}` , photoURL:''
    }).then(() => {
    // Profile updated!
    // ...
    }).catch((error) => {
    // An error occurred
    // ...
    });

}

export let restPassworld = (email) => {
    const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    renderErrorMessage("erro_newemail", "rest thành công");
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    renderErrorMessage("erro_newemail", errorMessage);
    // ..
  });
}

// erro_newemail
// const findPropFromObj = (object, key) => {
//     if (object.hasOwnProperty(key)) {
//     return object[key];
//     }

//     for (const k of Object.keys(object)) {
//     if (typeof object[k] === "object") {
//         const o = findPropFromObj(object[k], key);
//         if (o !== null && typeof o !== "undefined") return o;
//     }
//     }

//     return null;
// };