import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars} from "@fortawesome/free-solid-svg-icons";
import { BiSearch } from 'react-icons/bi';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { ReactComponent as Logo } from '../logo.svg';

// const { PUBLIC_URL } = process.env;

const Navigation = () => {
    // debugger;
    const [navbarOpen, setNavbarOpen] = useState(false);

    const ref = useRef();
    useEffect(() => {
        const handler = (event) => {
        if (
            navbarOpen &&
            ref.current &&
            !ref.current.contains(event.target)
        ) {
            setNavbarOpen(false);
        }
        };
        document.addEventListener('mousedown', handler);
        return () => {
        // Cleanup the event listener
        document.removeEventListener('mousedown', handler);
        };
    }, [navbarOpen]);

    return(
        <header className="container" id="header">
            <div className='header-container'>
                <div className='logo'>
                <Link to="/"><Logo/></Link>
                </div>

                <div className="filter-section" >
                    <button className="filter-btn">Anywhere</button>
                    <span className="filter-span"/>
                    <button className="filter-btn">Any Week</button>
                    <span className="filter-span"/>
                    <button className="filter-btn filter-btn-search">
                        <div>Add Guest</div>
                        <div className="bsearch-container">
                            < BiSearch className="bsearch"/>
                        </div>
                    </button>
                </div>
                <nav className="nav-section">
                    <div className='group-1'>
                        <Link className="group-1-link" to="/host/homes">Airbnb your home</Link>
                        <div className='globe-btn'>
                            <button>
                                <div>
                                    <FontAwesomeIcon icon={faGlobe} />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='group-2'>
                        <div ref={ref}>
                            <button className='menu-btn' onClick={() => setNavbarOpen((prev) => !prev)}>
                                <div>
                                    <FontAwesomeIcon icon={faBars}/>
                                </div>
                                <div className='menu-btn-item2'>
                                    <img className='menu-img' src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" alt="" />
                                </div>
                            </button>
                            <ul className={`menu-nav ${navbarOpen ? 'show-menu' : ''}`}>
                                <li>
                                    <Link to="/" className='menu-link' onClick={() => setNavbarOpen(false)}>Messages</Link>
                                </li>
                                <li>
                                    <Link to="/backup" className='menu-link' onClick={() => setNavbarOpen(false)}>Trips</Link>
                                </li>
                                <li>
                                    <Link to="/reports" className='menu-link' onClick={() => setNavbarOpen(false)}>Wishlists</Link>
                                </li>
                                <div><hr /></div>
                                <li>
                                    <Link to="/repository" className='menu-link' onClick={() => setNavbarOpen(false)}>Airbnb your home</Link>
                                </li>
                                <li>
                                    <Link to="/repository" className='menu-link' onClick={() => setNavbarOpen(false)}>Host an experience</Link>
                                </li>
                                <li>
                                    <Link to="/repository" className='menu-link' onClick={() => setNavbarOpen(false)}>Account</Link>
                                </li>
                                <div><hr /></div>
                                <li>
                                    <Link to="/repository" className='menu-link' onClick={() => setNavbarOpen(false)}>Help</Link>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                    
                </nav>
                {/* <Hamburger /> */}
            </div>
            
        </header>
    );

}

export default Navigation;