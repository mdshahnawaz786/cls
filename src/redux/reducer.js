export const reducer = (data=[], action) =>{
    if(action.type === "search"){
        return action.data
    }
    return data
}