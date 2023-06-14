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
                    <span className="self-center text-xl font-semibold whitespace-nowrap">RocketLab.</span>
                </Link>
                <div className="flex items-center lg:order-2">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Labs
                    </Link>
                    <Link to="/expense" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Expense
                    </Link>
                    {name ? (
                        <Link onClick={() => signOut()} to="#" className="block mt-4 lg:inline-block lg:mt-0 bg-gray-800 text-white hover:text-white hover:bg-gray-700 rounded-lg px-4 py-2">
                            Sign out: {name?.substring(0, 15)}
                        </Link>

                    ) : (
                        <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-2 mr-4">
                            Sign in
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar