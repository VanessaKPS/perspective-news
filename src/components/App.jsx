import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Top50News from './Top50News'
import Explore from './Explore'
import '../styles/styles.scss'

const App = () => {
    return (
        <Router>
            <div className='app-wrapper'>
                <nav className='navbar'>
                    <a
                        className='navbar-brand'
                        href='http://localhost:3000'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src='https://www.flaticon.com/svg/static/icons/svg/2844/2844433.svg'
                            width='30'
                            height='30'
                            alt='perspective news aggregator app'
                        />
                    </a>
                    <Link to='/' className='navbar-brand'>
                        Perspective News App
                    </Link>

                    <Link to='/' className='nav-link'>
                        Home
                    </Link>

                    <Link to='/explore' className='nav-link'>
                        Explore
                    </Link>
                </nav>
                <Route path='/' exact component={Top50News} />

                <Route path='/explore' component={Explore} />
            </div>
        </Router>
    )
}

export default App
