import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import fruit from '../img/Fruits.png';
import SummaryApi from '../common';
function Signup() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""

})
const navigate = useNavigate()

const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
        return {
            ...preve,
            [name]: value
        }
    })
}


const handleSubmit = async (e) => {
    e.preventDefault()

    if (data.password === data.confirmPassword) {

        const dataResponse = await fetch(SummaryApi.signUP.url, {
            method: SummaryApi.signUP.method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()
        console.log(dataApi);
        if (dataApi.success) {
            toast.success(dataApi.message)
            navigate("/login")
        }

        if (dataApi.error) {
            toast.error(dataApi.message)
        }

    } else {
        toast.error("Please check password and confirm password")
    }

}
  return (
    <>
       {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-3 text-white mb-4 animated slideInDown">
        Signup
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          Signup
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}

  <section className="bg-light py-10 py-md-10" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="text-center mb-3">
                <Link to="/">
                    <img
                      src={fruit}
                      alt="BootstrapBrain Logo"
                      width={50}
                      height={57}
                    />
                  </Link>
                </div>
                <h2 className="fs-6 fw-normal text-center text mb-4">
                  Create new account
                </h2>
                <form onSubmit={handleSubmit}>
                                        <div className="row gy-2 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        id="name"
                                                        placeholder="your full name"
                                                        value={data.name}
                                                        onChange={handleOnChange}
                                                        required
                                                    />
                                                    <label htmlFor="email" className="form-label">
                                                        Full Name
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        placeholder="name@example.com"
                                                        value={data.email}
                                                        onChange={handleOnChange}
                                                        required
                                                    />
                                                    <label htmlFor="email" className="form-label">
                                                        Email
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Password"
                                                        value={data.password}
                                                        onChange={handleOnChange}
                                                        required
                                                    />
                                                    <label htmlFor="password" className="form-label">
                                                        Password
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="confirmPassword"
                                                        id="confirmPassword"
                                                        placeholder="Confirm Password"
                                                        value={data.confirmPassword}
                                                        onChange={handleOnChange}
                                                        required
                                                    />
                                                    <label htmlFor="confirmPassword" className="form-label">
                                                        Confirm Password
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex gap-2 justify-content-between">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="rememberMe"
                                                            id="rememberMe"
                                                        />
                                                        <label
                                                            className="form-check-label text-secondary"
                                                            htmlFor="rememberMe"
                                                        >
                                                            Keep me logged in
                                                        </label>
                                                    </div>
                                                    <a href="#!" className="link-primary text-decoration-none">
                                                        Forgot password?
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid my-3">
                                                    <button className="btn btn-primary btn-lg" type="submit">
                                                        Sign Up
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <p className="m-0 text text-center">
                                                    Already have an account?{' '}
                                                    <Link to="/login" className="link-primary text-decoration-none">
                                                        Login
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
    </>
  )
}

export default Signup