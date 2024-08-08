import './Header.scss';
import NavBar from './Navbar';

function Header() {
    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-logo">
                    <NavBar/>
                    <a className="logo-link" href="/">
                        <div className="logo-image">
                            <span className="figure-image">
                                <img className="image-uet" src="logo.png" alt="" />
                            </span>
                        </div>
                        <div className="header-title">
                            <span className="school">
                                Tweendee Assignment
                            </span>
                            <span className="tool-name">Intern Javascript</span>
                        </div>
                    </a>
                </div>
                <div className="header-wrapper">
                    <div className="top-nav">
                        <div className="nav-lang">
                            <select
                                className="change-lang"
                            >
                                <option value="en" >
                                    Tiếng Anh
                                </option>
                            </select>
                            
                                <div className="nav-lang-select">
                                    <div className="lang-flag">
                                        <div className="image-config">
                                            <img
                                                className="img"
                                                src="https://vieclam.uet.vnu.edu.vn/images/common/flag-en.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <span className="lang">English</span>
                                </div>
                            
                        </div>
                    </div>
                    <div className="bot-nav">
                        <div className="bot-nav-container">
                            <div className="bot-nav-content">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="home-icon" href="/">
                                            <svg fill="none" height="13" width="14" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14 6.381v.232c-.125.278-.362.37-.673.347-.387-.012-.786 0-1.173 0h-.15v4.594c0 .844-.648 1.446-1.558 1.446H8.588c-.387 0-.586-.174-.586-.544V9.783c0-.312-.212-.497-.537-.497H6.58c-.387 0-.574.173-.574.532v2.661c0 .336-.2.521-.56.521H3.598c-.96 0-1.596-.59-1.596-1.481V6.96H.532c-.225 0-.387-.093-.487-.278-.087-.185-.05-.37.125-.532l.062-.058L6.555.226c.324-.301.561-.301.898 0l6.273 5.82c.087.092.174.22.274.335Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="link yourmodel" href="/">
                                           Users
                                        </a>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <a className="link" target='blank' href="https://github.com/TKhawns/Twd_Assignment">
                                          Documentation
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="link" href="/contact">
                                          Contact
                                        </a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
