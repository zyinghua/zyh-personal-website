import { React, useState, useEffect } from "react";
import { BiChevronLeft } from "react-icons/bi";
import photo1 from "../assets/img/photos/bridge-pigeons.jpeg";
import photo2 from "../assets/img/photos/melb-tram.jpg";
import photo3 from "../assets/img/photos/opera-house.jpg";
import photo4 from "../assets/img/photos/sunset.jpeg";
import photo5 from "../assets/img/photos/sydney-harbour-bridge-pigeon.jpg";
import photo6 from "../assets/img/photos/the-twelve-apostles.jpeg";

export const Photos = () => {
    const photos = [photo1, photo2, photo3, photo4, photo5, photo6];
    const [displayIndex, setDisplayIndex] = useState(0);

    useEffect(() => {
        let ticker = setInterval(() => {
            setDisplayIndex((displayIndex + 1) % photos.length);
        }, 3000);

        return () => {
            clearInterval(ticker);
        };
    });

    return (
        <div className="photos" id="photos">
            <h4>besides coding, I'm also a photography lover 📸!</h4>
            <div className="slide-show">
                <div
                    className="slide-show-slider"
                    style={{
                        transform: `translate3d(${-displayIndex * 100}%, 0, 0)`,
                    }}
                >
                    {photos.map((photo, index) => (
                        <img className="slide" key={index} src={photo} />
                    ))}
                </div>

                <div className="slide-show-dots">
                    {photos.map((photo, index) => (
                        <img
                            key={index}
                            className={
                                index === displayIndex
                                    ? "active slide-show-dot"
                                    : "slide-show-dot"
                            }
                            onClick={() => {
                                setDisplayIndex(index);
                            }}
                            src={photo}
                        ></img>
                    ))}
                </div>
            </div>
        </div>
    );
};
