import React from 'react';
import { Link } from "react-router-dom";

import SiteLogo from '../../../assets/Logo/Logo-brainflix.svg';
import UploadIcon from '../../../assets/Icons/SVG/Icon-upload.svg';
import Btn from '../../Other_Components/Button/Button'


const Header = () => {
    return (
        <header className="main-header__container">
            <div className="main-header">
            <Link className="main-logo__container" to="/"><img  alt="BrainFlix logo" src={SiteLogo}/></Link>
                <div className="main-header__search-upload-container">
                    <form className="main-header__search-input-container" action="#">
                        <input className="search-field" type="text" placeholder="Search"/>
                    </form>
                    <div className="main-header__user-upload-container">
                        <form className="main-header__upload-btn-container">
                        <Link to="/Upload"><Btn text="UPLOAD" image={UploadIcon} class="primary-btn upload-btn"/></Link>
                        </form>
                        <div className="user-image"></div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;