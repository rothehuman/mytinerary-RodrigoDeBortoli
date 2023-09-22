import { useDispatch, useSelector } from "react-redux"
import { user_signup} from "../store/actions/userActions";
import { useState } from "react";
import { GoogleSignin } from "../components/GoogleSignin";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        photo: '',
        country: '',
    })

    const dispatch = useDispatch();

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    console.log(formData)

    const handleSignUp = async (event) => {
        event.preventDefault();

        try {
            dispatch(user_signup({
                data: formData
            }))
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Sign Up</h1>
            </div>

            <form onSubmit={handleSignUp} action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>

                    <div className="relative">
                        <input
                            onChange={handleInput}
                            type="text"
                            name="name"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Name"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="lastname" className="sr-only">Lastname</label>

                    <div className="relative">
                        <input
                            onChange={handleInput}
                            type="text"
                            name="lastname"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Lastame"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="sr-only">Email</label>

                    <div className="relative">
                        <input
                            onChange={handleInput}
                            type="email"
                            name="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter email"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>

                    <div className="relative">
                        <input
                            onChange={handleInput}
                            type="password"
                            name="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                <div>
                    <label htmlFor="photo" className="sr-only">Photo</label>

                    <div className="relative">
                        <input
                            onChange={handleInput}
                            type="text"
                            name="photo"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter photo url"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="country" className="sr-only">Country</label>

                    <div className="relative">
                        <input
                            onChange={handleInput}
                            type="text"
                            name="country"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Country"
                        />
                    </div>
                </div>

                <GoogleSignin />

                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Already registered?
                        <Link to={"../signin"} className="underline">Sign in</Link>
                    </p>

                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        onClick={handleSignUp}
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp