import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { Auth as AuthProvider } from "../contexts/Auth";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import rocket from "./../assets/rocket.png"

function Navbar() {

    const [name, setName] = useContext(AuthProvider);
    const navigate = useNavigate();


    async function signOut() {
        try {
            await Auth.signOut();
            setName(null)
            navigate("/")
            console.log('user has signing out!');
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }


    useEffect(() => {
        async function checkUser() {
            try {
                const user = await Auth.currentAuthenticatedUser();
                setName(user.username);
                console.log("currentAuthenticatedUser")
            } catch (err) {
                console.log("currentAuthenticatedUser", err)
                setName(null);
            }
        }
        checkUser();
    }, []);


    return (
        <nav className="bg-gray-900 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                    <img src={rocket} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">RocketLab.</span>
                </Link>
                <div className="flex items-center lg:order-2">
                    {name ? (<button onClick={() => signOut()} className="text-gray-800 dark:text-white ont-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Sign out</button>) : (<Link to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>)}

                    <Link to="/" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">{name}</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar