const defaultState = {
  alert: {
    opened: false
  },
  loader: {
    opened: false
  },
  notification: {
    opened: false
  }
}

const postReducer = (state = defaultState, action = {data: {}}) => {
  switch (action.type) {
    case 'OPEN_ALERT':
      return { ...state, alert: { ...action.data, opened: true, actions: true } }

    case 'CLOSE_ALERT':
      return { ...state, alert: { opened: false } }

    case 'OPEN_LOADER':
      return { ...state, loader: { ...action.data, opened: true } }

    case 'CLOSE_LOADER':
      return { ...state, loader: { opened: false } }

    case 'OPEN_NOTIFICATION':
      return { ...state, notification: { ...action.data, opened: true, duration: 5000 } }

    case 'CLOSE_NOTIFICATION':
      return { ...state, notification: { opened: false } }

    case 'SAVE_STORE':
      return { ...state, ...action.data }

    case 'SAVE_SUBSCRIPTION':
      return { ...state, subscription: { ...action.data } }

    default:
      return state;
  }
}

export default postReducer;