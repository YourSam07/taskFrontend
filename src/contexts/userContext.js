import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    isloggedin: false,
  })

  const [renderOption, setRenderOption] = useState("Projects")

  if (currentUser.isloggedin) {
    localStorage.setItem('stayLoggedIn', 'true')
    localStorage.setItem('userName', currentUser.name)
  }

  useEffect(() => {
    const islogin = localStorage.getItem("stayLoggedIn") === "true"
    const username = localStorage.getItem("userName")
    if (islogin) {
      setCurrentUser({
        name: username,
        isloggedin: islogin,
      })
    }

  }, [])


  return (
    <UserContext.Provider value={[{ currentUser, setCurrentUser, renderOption, setRenderOption }]}>
      {children}
    </UserContext.Provider>
  )
}