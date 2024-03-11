// Importing the useReducer hook from the React library
import { useReducer } from "react";

// Importing the reducer function and action types from photoReducers file
import reducer, {
  PHOTO_LIKE_BTN_CLICK,
  SHOW_MODAL,
  CLOSE_MODAL,
  SET_APPLICATION_DATA,
  GET_TOPIC_PHOTOS
} from "../reducers/photoReducers";

// Function to handle application data state and actions
export default function useApplicationData() {
  // Default state for the application data
  const defaultState = {
    isModalOpen: false,
    modalPhotoDetails: null,
    topics: [],
    photos: [],
    favPhotoList: [],
  };

  // Initializing state and dispatch function using useReducer hook
  const [state, dispatch] = useReducer(reducer, defaultState);

  // Function to handle photo like button click action
  const photoFavBtnClicked = (id) => {
    dispatch({ type: PHOTO_LIKE_BTN_CLICK, payload: id });
  };

  // Function to show modal with photo details
  const showModal = (id) => {
    dispatch({ type: SHOW_MODAL, payload: id });
  };

  // Function to close modal
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  // Function to set application data (topics and photos)
  const setAppData = (topics, photos) => {
    dispatch({ type: SET_APPLICATION_DATA, payload: { topics, photos } });
  };

  // Function to get photos related to a specific topic
  const getTopicPhotos = (id) => {
    dispatch({ type: GET_TOPIC_PHOTOS, payload: id })
  };

  // Returning state and action functions to be used by components
  return {
    state,
    photoFavBtnClicked,
    showModal,
    closeModal,
    setAppData,
    getTopicPhotos
  };
}



