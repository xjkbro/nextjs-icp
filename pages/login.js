import { useState } from "react"
import { setCookie } from "nookies"
// import getConfig from 'next/config'
import Router from "next/router"
import { getStrapiURL } from "../utils/api"

// const { publicRuntimeConfig } = getConfig();

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin() {
    const loginInfo = {
      identifier: username,
      password: password,
    }

    const login = await fetch(getStrapiURL("/api/auth/local"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })

    const loginResponse = await login.json()
    // const { id, username, email } = loginResponse.user
    setCookie(null, "jwt", loginResponse.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    })
    setCookie(null, "user_id", loginResponse.user.id, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    })
    setCookie(null, "username", loginResponse.user.username, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    })
    setCookie(null, "user_email", loginResponse.user.email, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    })

    Router.push("/")
  }

  return (
    <>
      <h2>You need to login to access this page</h2>

      <form>
        <input
          type="email"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type="button" onClick={() => handleLogin()}>
          Login
        </button>
      </form>
    </>
  )
}

export default Login
