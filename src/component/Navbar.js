import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="flex px-4 border-b md:shadow-lg items-center relative">
            <div class="text-lg ">
                UI/UX design
            </div>

            <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">

                <NavLink to={"/"}>
                    <li>
                        <a  class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Home</span>
                        </a>
                    </li>
                </NavLink>

                <NavLink to={"/login"}>
                    <li>
                        <a class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <div >Login</div>
                        </a>
                    </li>
                </NavLink>


                <NavLink to={"/about"}>
                    <li>
                        <a  class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>About</span>
                        </a>
                    </li>
                </NavLink>

            </ul>

        </nav>
    )
}

export default Navbar