import { ActionTypes } from "../constants/action-types";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import {db} from '../../firebase'

export const fetchData = () => async (dispatch) =>{
      onSnapshot(collection(db, "cars"),
        (snapShot) => {
          let response = [];
          snapShot.docs.forEach((doc) => {
            response.push({ id: doc.id, ...doc.data().data });
          });
          dispatch({type: ActionTypes.FETCH_DATA, payload: response})
          dispatch({type: ActionTypes.CAR_SEARCH, payload: response})
        },
        (error) => {
          console.log(error);
        }
      )
  }

export const fetchDataDetail = (id) => async (dispatch) =>{
      const docRef = doc(db, "cars", id);
      const docSnap = await getDoc(docRef);
      let response = []
      if (docSnap.exists()) {
          response.push({id:id,...docSnap.data().data})
          dispatch({type: ActionTypes.DETAIL_CARS, payload: response[0]})
      } else {
        console.log("No such document!");
      }
  }

export const removeSelectedCars = () =>{
  return {
    type: ActionTypes.REMOVE_DETAIL_CARS,
  };
}

export const setSearch = (cars) =>{
  return {
    type: ActionTypes.CAR_SEARCH,
    payload: cars,
  };
}

export const setButton = (btn) =>{
  return {
    type: ActionTypes.SET_BUTTON,
    payload: btn,
  };
}




