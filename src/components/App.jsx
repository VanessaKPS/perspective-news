import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Top50News from './Top50News'
import Explore from './Explore'

import Logo from '../Assets/CategoriesSVG/cube.svg'
import '../styles/styles.scss'

const App = () => {
    return (
        <Router>
            <div className='app-wrapper'>
                <nav className='navbar'>
                    <Link to='/' className='navbar-brand'>
                        <div className='navbar-brand-wrapper'>
                            <img
                                className='logo'
                                src={Logo}
                                alt='perspective news aggregator app'
                            />
                            Perspective News
                        </div>
                    </Link>
                    <div className='navbar-link-wrapper'>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>

                        <Link to='/explore' className='nav-link'>
                            Search
                        </Link>
                    </div>
                </nav>

                <Route path='/' exact component={Top50News} />

                <Route path='/explore' component={Explore} />
            </div>
        </Router>
    )
}

export default App
