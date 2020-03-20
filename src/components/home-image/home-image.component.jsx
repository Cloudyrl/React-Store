import React from 'react'
import {useHistory} from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'

import './home-image.styles.scss'

const HomeImage = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/shop");
    }

    return(
        <div className="image-container">
            <div className="banner">
                <h1>Shop with us!</h1>
            </div>
            <CustomButton onClick={handleClick}>
                our products
            </CustomButton>      
        </div>
    )
}

export default HomeImage