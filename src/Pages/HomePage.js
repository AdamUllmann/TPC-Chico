import React from 'react';
import homePageData from '../DataFiles/HomePageData.js'
import '../CSS/HomePage.css';

function HomePage() {
    return (
        <div className="homePageBody">
            {homePageData.map((section, index) => (
                <div key={index} className="homePageSection">
                    <h3 className='homePageTitle'>{section.title}</h3>
                    <p className='homePageDescription'>
                        {section.description.split('\n').map((point, pointIndex) => (
                            <span key={pointIndex}>{point.trim()}</span>
                        ))}
                    </p>
                    <br></br>
                </div>
            ))}
            <p><b>© 2023 Technical Projects Club - CSU Chico. All rights reserved.</b></p>
        </div>
    )
}

export default HomePage;
