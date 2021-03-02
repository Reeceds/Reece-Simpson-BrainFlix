import React from 'react';
import SiteLogo from '../../../assets/Logo/Logo-brainflix.svg';
import UserImage from '../../../assets/Images/Mohan-muruge.jpg';
import UploadIcon from '../../../assets/Icons/SVG/Icon-upload.svg';
import Btn from '../../Other_Components/Button/Button'


const Header = () => {
    return (
        <header className="main-header">
            <img className="main-logo" alt="BrainFlix logo" src={SiteLogo}/>
            <div className="main-header__search-upload-container">
                <form className="main-header__search-input-container" action="#">
                    <input className="search-field" type="text" placeholder="Search"/>
                </form>
                <div className="main-header__user-upload-container">
                    <form className="main-header__upload-btn-container" action="#">
                        <Btn text="UPLOAD" image={UploadIcon} class="primary-btn upload-btn"/>
                    </form>
                    <img className="user-image" alt="User icon" src={UserImage}/>
                </div>
            </div>
        </header>
    )
};

export default Header;