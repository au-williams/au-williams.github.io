const AVATAR_SOURCE = 'AVATAR_SOURCE';

const initialState = { source: null };

// todo: avatar isloading key, loading animation?

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case AVATAR_SOURCE:
      return { ...state, source: action.payload };
    default:
      return state;
  }
}

export const setAvatar = (url) => (dispatch) => {
  dispatch({
    type: AVATAR_SOURCE,
    payload: url
  });
};
