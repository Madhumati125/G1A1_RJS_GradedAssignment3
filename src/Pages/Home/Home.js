import React, { useEffect, useState } from "react";
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {

    const [ comingSoon, setComingSoon ] = useState([])

    useEffect(() => {
        fetch("https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg")
        .then(res => res.json())
        .then(data => setComingSoon(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        comingSoon.map(movie => (
                            <span>movie.original_title</span>
                        ))
                    }
            </Carousel>    
            </div>
        </>
    )
}

export default Home