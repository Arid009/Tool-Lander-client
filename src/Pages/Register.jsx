import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [error,setError] = useState('')

    const handleRegister = (event) =>{
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')
        console.log(email,password,name,photo);

        if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(password)) {
            setError('Minimum six characters, at least one capital letter and one special character ')
            return 
        }
        else{
            setError('')
        }

        createUser(email,password)
        .then(res => {
            console.log(res.user);
            updateProfile(res.user, {
                displayName: name, photoURL: photo
            })
            .then(res => {
                // console.log(res)
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully registered',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                setError('')
            })
            .catch(err => console.error(err))
        })
        .catch(err => setError(err.code))
    }

    return (
        <div className="max-w-screen-xl mx-auto px-3">
            <h1 className="text-center text-3xl font-bold text-green-600">Please Register</h1>
            {error && <p className="text-center text-red-600">{error}</p>}
            <div className="max-w-4xl mx-auto">

            <form onSubmit={handleRegister}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-xl font-medium text-green-500 dark:text-white">Username</label>
                    <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="UserName" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-xl font-medium text-green-500 dark:text-white">PhotoURL</label>
                    <input type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="photoURL" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-xl font-medium text-green-500 dark:text-white">Your Email</label>
                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-xl font-medium text-green-500 dark:text-white">Your Password</label>
                    <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                </div>
                <button type="submit" className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
            </form>
            </div>
            <p className="text-center mt-5">Already have an Account? <Link to='/login' className="text-blue-500 underline">Login</Link></p>
            

        </div>
    );
};

export default Register;