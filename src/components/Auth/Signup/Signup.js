// @ts-nocheck
import React, { useState } from "react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { Icon } from "@iconify/react"
import "./signup.css"
import { Link, useHistory } from "react-router-dom"
import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Signup = () => {
  const history = useHistory()
  const [value, setValue] = useState()
  const [enable, setEnable] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    setEnable(true)
    setTimeout(() => {
      history.push("/login")
    }, 2000)
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="container__signup">
          <h2 className="primary__heading">Doctorly</h2>
          <form onSubmit={handleSubmit}>
            <div className="form__input">
              <input type="text" name="firstname" placeholder="First Name" />
            </div>
            <div className="form__input">
              <input type="text" name="lastname" placeholder="Last Name" />
            </div>
            <div className="form__input">
              <input type="text" name="Nid" placeholder="National ID" />
            </div>
            <div className="form__input">
              <input type="text" name="jobtitle" placeholder="Job Title" />
            </div>
            <div className="form__input">
              <select>
                <option>Role</option>
                <option>user</option>
                <option>Admin</option>
                <option>superadmin</option>
              </select>
            </div>
            <div className="form__input">
              <input type="text" name="country" placeholder="Country" />
            </div>
            <div className="form__input">
              <input type="text" name="address" placeholder="Address" />
            </div>
            <div className="form__input">
              <input type="date" name="jobtitle" />
            </div>
            <div className="form__input">
              <PhoneInput
                defaultCountry="RW"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
            </div>
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
                  "Regitser"
                )}
              </button>
            </div>
            <div>
              <h3 className="form__buttom__heading">
                Already have an Account?
              </h3>
            </div>
            <div>
              <Link to="/login">
                <span className="form__login__btn">
                  Login
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

export default Signup
