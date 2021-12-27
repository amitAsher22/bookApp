import {BOOKS , SEARCH} from "./types"


export const getValue = (value)=>{
    return{
        type:SEARCH,
        payload:value
    }
}



export const dataFromApi = (value) => async (dispatch) => {
    try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
        const data = await res.json()

        dispatch({ type: BOOKS, payload: data.items })
    } catch (error) {
        console.log(error);
    }

}



