import react, { useState, useRef } from 'react';
import './ImageGenerator.css';
import default_image from '../Assets/defaultImage.jpg';

const ImageGenerator = () =>{

    const [image_url, setImage_url] = useState("/");
    const [loading, setLoading] = useState(false);
    let inputRef = useRef(null);

    const imageGenerator = async () => {
        console.log("Clicked");
        if(inputRef.current.value === "") {
            return 0;
        }
        setLoading(true);
        const response = await fetch('https://imageai-generator.p.rapidapi.com/image', {
            method: 'POST', // HTTP method is POST
            headers: {
                'Content-Type': 'application/json', // Content-Type is JSON
                'x-rapidapi-host': 'imageai-generator.p.rapidapi.com', // RapidAPI host header
                'x-rapidapi-key': 'ef8bcec5e0msh656ffe768a7826ap100807jsnbd3e703784b0' // Your RapidAPI key
            },
            body: JSON.stringify({
                negative_prompt: "", // JSON body parameter
                prompt: `${inputRef.current.value}`, // JSON body parameter
                width: 512, // JSON body parameter
                height: 512, // JSON body parameter
                hr_scale: 2 // JSON body parameter
            }),
        });
        let data = await response.json();
        // console.log(data);
        // const base64Image = data; // Assuming the response contains a Base64 encoded string
    
        // Create the data URL
        const imageUrl = `data:image/png;base64,${data}`;
        
        // Print the image URL
        console.log(imageUrl);
        setImage_url(imageUrl.url);
        setLoading(false);
    }

    return (
        <div className='ai-image-generator'>
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image"><img src={image_url=== "/" ? default_image : image_url} alt=''/></div>
                <div className="loading">
                    <div className={loading?"loading-bar-full":"loading-bar"}></div>
                    <div className={loading?"loading-text":"display-none"}>Loading....</div>
                </div>
            </div>
            <div className="search-box">
                 <input type="text" ref={inputRef} className="search-input" placeholder='Describe what do you want to see' />
                 <div className="generate-btn" onClick={()=>{imageGenerator()}}>Generate</div>
            </div>
        </div>
    );
}

export default ImageGenerator;