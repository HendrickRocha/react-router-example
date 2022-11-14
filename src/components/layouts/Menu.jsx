import React from "react";
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = props => {

    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Início</Link>
                    </li>
                    <li>
                        <Link to='/about' >About</Link>
                    </li>
                    <li>
                        <Link to='/param/69'>Param#01</Link>
                    </li>
                    <li>
                        <Link to='/param/22'>Param#02</Link>
                    </li>
                    <li>
                        <Link to='/naoexiste'>Não Existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )

}

export default Menu