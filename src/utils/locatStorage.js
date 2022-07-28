export const addUserToLocalStorage=(user)=>{
    localStorage.setItem("user",JSON.stringify(user))
}
export const removeToLocalStorage=()=>{
    localStorage.removeItem("user")
}
export const getUserFromLocalStorage=()=>{
    let user=localStorage.getItem("user")
    let result = user?JSON.parse(user):null;
    return result
}