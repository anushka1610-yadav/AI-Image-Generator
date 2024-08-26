import react from 'react';
import './ImageGenerator.css';
import defalut_image from '../Assets/defaultImage.jpg';

const ImageGenerator = () =>{
    return (
        <div className='ai-image-generator'>
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image"><img src={defalut_image} alt=''/></div>
            </div>
            <div className="search-box">
                 <input type="text" className="search-input" placeholder='Describe what do you want to see' />
                 <div className="generate-btn">Generate</div>
            </div>
        </div>
    );
}

export default ImageGenerator;