import { useState,  useEffect } from "react";
// import UserContext from "../../context/UserContext";
// import UserContextProvider, { user } from "../../context/UserContextProvider";
import User from "../../models/User";
// const mongoose = require('mongoose')
import axios from "axios";
import { request, response } from "express";
// import connectDB from "../../connect";

export default function LoginPage() {

    const [user, setUser ] = useState('');

    useEffect(() => {
        axios.post("/")
        .then(request => )
        // console.log("MongoDB Connected")
    }, []); 
    
        const [fullname, setFullname] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
        const [error, setError] = useState(null);

        // const {setUser} = useContext(UserContext)
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          setUser({fullname, email, password})
        //   console.log(user);
          const data = new User( user );

          await data.create();
        }
               
    return(
        <>
        <div className="flex justify-center rounded-xl border-black shadow-2xl shadow-black my-8 py-8 mx-10">
            <h1 className=" flex text-2xl text-center " > LOGIN </h1>
            <div>
        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <label for="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value) }
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value) }
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="password" className="hidden">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value) }
                                    placeholder="Password"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button
                            onClick={handleSubmit}
                                type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                                
                            >
                                Submit
                            </button>
                        </form>
                    </div>
             </div>
        </>
        
    )
};
