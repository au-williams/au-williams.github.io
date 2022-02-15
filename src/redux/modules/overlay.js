const OVERLAY_OPACITY = 'OVERLAY_OPACITY';

const initialState = { opacity: 0 };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OVERLAY_OPACITY:
      return { ...state, opacity: action.payload };
    default:
      return state;
  }
}

export const showOverlay = () => (dispatch) => {
  dispatch({ type: OVERLAY_OPACITY, payload: '32.5%' });
};

export const hideOverlay = () => (dispatch) => {
  dispatch({ type: OVERLAY_OPACITY, payload: 0 });
};
