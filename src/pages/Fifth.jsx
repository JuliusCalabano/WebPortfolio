import Carousel from "../component/Carousel"
import { useState, useEffect } from "react";

function Fifth() {
    const [baseWidth, setBaseWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setBaseWidth(window.innerWidth - 32);
            } else {
                setBaseWidth(1200);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        
        <div>

            <div style={{ height: '600px', position: 'relative' }}>
                <div style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 16px",
                    boxSizing: "border-box",
                }}>
                    <Carousel
                        baseWidth={baseWidth}
                        autoplay={true}
                        autoplayDelay={3000}
                        pauseOnHover={true}
                        loop={false}
                        round={false}
                    />
                </div>
            </div>
        </div>
    )
}
export default Fifth