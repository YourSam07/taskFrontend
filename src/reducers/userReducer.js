export const userReducer = (state = {user : {}}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        loading: false, userInfo: action.payload
      }
  }
  return state
}