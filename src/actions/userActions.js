


export const login = (email, password) => async (dispatch) => {

  try {

    if (email === "test" && password === "test") {
      dispatch({
        type: "LOGIN",
        payload: {
          isLogged: true,
        }
      })
    }

  } catch (error) {
    console.log(error)

  }
}