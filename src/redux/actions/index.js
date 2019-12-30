import {
  URL,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  UPDATE_POST,
  GET_MESSAGE,
  ADD_USER
} from "../action_types";

export function editPost(id) {
  return { type: EDIT_POST, id };
}

export function getMessages() {
  return function(dispatch) {
    fetch(`${URL}/posts`).then(res => res.json()).then(json => {
      console.log("jj", json);
      dispatch({ type: GET_MESSAGE,payload:json});
    });
  };
}
  
export function addPost(payload) {
  return async function(dispatch) {
    const res = await fetch(`${URL}/posts`, {
      method: "POST",
      body: JSON.stringify({
        userId: payload.userId,
        title: payload.title,
        body: payload.body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const json = await res.json();
    dispatch({ type: ADD_POST, payload: json });
  };
}

export function updatePost(id,payload) {
  return async function(dispatch) {
    const res = await fetch(`${URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        userId: payload.userId,
        title: payload.title,
        body: payload.body
      })
    });
    const json = await res.json();
    // console.log("updated post:",json)
    dispatch({ type: UPDATE_POST, payload: json, id });
  };
}

export function patchData(id,payload) {
  return async function(dispatch) {
    const res = await fetch(`${URL}/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        userId: payload.userId,
        title: payload.title,
        body: payload.body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const json = await res.json();
    // console.log(json)
    dispatch({ type: UPDATE_POST, payload: json, id });
  };
}

export function deletePost(id) {
  return async function(dispatch) {
    const res = await fetch(`${URL}/posts/${id}`, {
      method: "DELETE"
    });
    const json = await res.json();
    dispatch({ type: DELETE_POST, payload: json, id });
  };
} 

export function addUser(payload) {
  return async function(dispatch) {
    const res = await fetch(`${URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        userId: payload.userId,
        name: payload.name,
        username: payload.username,
        email: payload.email,
        phone: payload.phone,
        street: payload.street,
        suit: payload.suit,
        city: payload.city,
        zipcode: payload.zipcode,
        lat: payload.lat,
        lng: payload.lng,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const json = await res.json();
    console.log("user",json);
    dispatch({ type: ADD_USER, payload: json });
  };
}
