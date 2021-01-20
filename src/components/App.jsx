import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Top50News from './Home/Top50News'
import Search from './Search/Search'
import { ReactComponent as MenuIcon } from '../Assets/UtilitiesImages/menu.svg'
import { ReactComponent as CloseIcon } from '../Assets/UtilitiesImages/close.svg'
import Logo from '../Assets/UtilitiesImages/cube.svg'
import '../styles/styles.scss'

const App = () => {
    const [isClicked, setIsClicked] = useState({ menu: false, close: false })

    const handleMenuClick = () => {
        setIsClicked((prevValue) => ({ ...prevValue, menu: !prevValue.menu }))
    }
    const handleCloseClick = () => {
        setIsClicked((prevValue) => ({
            menu: !prevValue.menu,
            close: !prevValue.close,
        }))
    }

    return (
        <Router>
            <div className='app-wrapper'>
                <nav className='navbar'>
                    <Link to='/' className='navbar-brand-wrapper'>
                        <div className='navbar-brand'>
                            <img
                                className='logo'
                                src={Logo}
                                alt='perspective news aggregator app'
                            />
                            <div className='brand-text-wrapper'>
                                Perspective
                                <span className='brand-text-span'>News</span>
                            </div>
                        </div>
                    </Link>
                    <div
                        className='burger-menu-wrapper'
                        onClick={handleMenuClick}
                    >
                        <MenuIcon
                            className={isClicked.menu ? 'hide' : 'burger-menu'}
                        />
                    </div>
                    <div
                        className={
                            isClicked.menu
                                ? 'navbar-link-wrapper-mobile'
                                : 'navbar-link-wrapper'
                        }
                    >
                        <CloseIcon
                            onClick={handleCloseClick}
                            className='close-menu'
                        />
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>

                        <Link to='/search' className='nav-link'>
                            Search
                        </Link>
                    </div>
                </nav>

                <Route path='/' exact component={Top50News} />

                <Route path='/search' component={Search} />
            </div>
        </Router>
    )
}

export default App
