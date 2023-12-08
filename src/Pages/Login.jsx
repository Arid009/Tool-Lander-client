import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
    const { logInUser, googleLogin } = useContext(AuthContext)
    const [error, setError] = useState('')

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email,password);

        logInUser(email, password)
            .then(res => {
                console.log(res)
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully logged',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate(location?.state ? location.state : '/')
                setError('')
            })
            .catch(err => {
                console.error(err)
                setError('Invalid email or password')
            })
    }

    const handleGoogle = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully logged',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate(location?.state ? location.state : '/')

            })
            .catch(err => console.error(err))
    }

    return (
        <div className="max-w-screen-xl mx-auto px-3">
            <h1 className="text-center text-3xl font-bold text-green-600">Please Login</h1>
            {error && <p className="text-center text-red-600">{error}</p>}
            <div className="max-w-4xl mx-auto">

                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-xl font-medium text-green-500 dark:text-white">Your Email</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-xl font-medium text-green-500 dark:text-white">Your Password</label>
                        <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                    </div>
                    <button type="submit" className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </form>
            </div>
            <div className="justify-center flex mt-4">
                <div className="text-center">
                    <hr className="w-96" />
                    <button onClick={handleGoogle} className="btn mt-3 text-white bg-green-400 hover:bg-green-500">Google <i className="bi bi-google"></i>Login</button>
                </div>
            </div>

            <p className="text-center mt-5">Don't have an Account? <Link to='/register' className="text-blue-500 underline">Register</Link></p>

        </div>
    );
};

export default Login;