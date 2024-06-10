import { useState,useEffect} from 'react';
import "./styles.css";


// eslint-disable-next-line react/prop-types
const ScrollIndicator = ({url})=>{
    const [data, setData] = useState([]);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl){
        try {
            const response = await fetch(getUrl);
            const data = await response.json();
            if(data && data.products && data.products.length > 0 ){
                setData(data.products)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=> {fetchData(url);}, [url])
    
    function handleScrollPercentage(){
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const scrolled = document.documentElement.scrollHeight - document.documentElement.clientHeight
        setScrollPercentage(scrollTop / scrolled * 100);
    }


    useEffect(()=>{window.addEventListener('scroll', handleScrollPercentage)
        return ()=>window.removeEventListener('scroll', handleScrollPercentage)
    },[]
)
    

    return <div>
        <div className="scroll-bar">
            <h1 className="scroll-title">Custom Scroll Indicator</h1>
            <div className="progress-bar-container">
                <div style={{width: `${scrollPercentage}%`}} className="bar-progress"></div>
            </div>
        </div>
        <div className="si-wrapper">
            <ul>
                {data.map((item)=>{
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>
    </div>
}

export default ScrollIndicator;