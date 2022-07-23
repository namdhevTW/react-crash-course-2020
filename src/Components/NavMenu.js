import { React } from 'react';
import { Link } from "react-router-dom";

function NavMenu(props) {
    return (
        <div>
            <span className='flex text-xl font-bold border-b py-3'>
                My First React App
            </span>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className='text-fuchsia-500 py-3 border-b block'
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className='text-fuchsia-500 py-3 border-b block'
                        onClick={props.closeMenu}
                        >
                            About
                        </Link>
                </li>
            </ul>

        </div>
    );
}

export default NavMenu;