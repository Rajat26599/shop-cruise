import { useEffect, useState } from "react";
import theme from "../theme";
import banner1 from '../assets/banner1.webp'
import banner2 from '../assets/banner2.webp'
import banner3 from '../assets/banner3.webp'
import banner4 from '../assets/banner4.webp'

const Carousel = () => {
    const [ imgIndex, setImgIndex ] = useState(0);
    const imgArr = [ banner1, banner2, banner3, banner4];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex( (imgIndex+1)%(imgArr.length) );
        }, 4000);
        return () => clearInterval(interval);
      }, [imgIndex]);

    return (
        <div>
            <img src={imgArr[imgIndex]} style={{height:'auto', width:'100vw'}} alt={imgArr[imgIndex]} />
            <div style={{ position:'relative', bottom:'40px', display:'flex', justifyContent:'center'}}>
                {
                    imgArr.map((img, index) => (
                        <div 
                            key={index} 
                            className='carousel-dots'
                            onClick={() => setImgIndex(index)}
                            style={{
                                display:'inline-flex', 
                                height:'0.6rem', 
                                width:'0.6rem', 
                                borderRadius:'50%', 
                                background:imgIndex===index?theme.priceColor:'white',
                                margin:'0.8rem'
                            }}>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Carousel;