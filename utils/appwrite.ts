import { Client, Account } from "appwrite";
export const client = new Client();
export const account = new Account(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('665a7ed40021130e45a2');

export async function signUp(email: string, password: string, confirmPassword: string, name: string) {
    if (password.length < 8) {
        alert("password length should be up to 8 characters");
        return
    }

    if (password != confirmPassword) {
        alert("password do not match");
    }

    try {
        const ac = await account.create(
            "unique()",
            email,
            password,
            name
        );
        return ac
    } catch (e) {
        console.log(e);
        return e
    }
}

export async function signIn(email: string, password: string) {

    if (email == "" || password == "") {
        alert("Please fill all the fields");
        return
    }

    try {
        const ac = await account.createEmailPasswordSession(
            email,
            password
        );
        return ac
    } catch (e) {
        console.log(e);
        return e
    }
}

export async function getCurrentUser() {
    const result = await account.get();
    // console.log(result);
    return result
}

export async function logOut(){
    const result = await account.deleteSession("current");
    return result
}

export function checkUserStatus(userLoginRes) {
    if(userLoginRes.emailVerification){
        return true
    }
    return false
}

export async function userEmailVerification(){
    const result = await account.createVerification('http://localhost');
    return result
}

export async function updateUserEmailVerification(userId: string, secret: string){
    const result = await account.updateVerification(userId, secret);
    return result
}

