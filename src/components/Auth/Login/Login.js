// @ts-nocheck
import React, { useState } from "react"
import "react-phone-number-input/style.css"
import { Icon } from "@iconify/react"
import "./login.css"
import { LoadingOutlined } from "@ant-design/icons"
import { useHistory, Link } from "react-router-dom"
import { Spin } from "antd"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Login = () => {
  const [enable, setEnable] = useState(false)
  const history = useHistory()
  const handleSubmit = (event) => {
    event.preventDefault()
    setEnable(true)
    setTimeout(() => {
      history.push("/")
    }, 2000)
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="container__login">
          <h2 className="primary__heading">Doctorly</h2>
          <form onSubmit={handleSubmit}>
            <div className="form__input">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form__input">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="form__button">
              <button type="submit" name="submit__btn">
                {enable ? (
                  <>
                    <Spin indicator={antIcon} /> Please Wait...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <div>
              <h3 className="form__buttom__heading">Don't have an Account?</h3>
            </div>
            <div>
              <Link to="/register">
                <span className="form__login__btn">
                  Register
                  <Icon icon="akar-icons:arrow-right" color="#2563EB" />
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
