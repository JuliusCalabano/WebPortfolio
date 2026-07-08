    import Carousel from "../component/Carousel"
    import { useState, useEffect } from "react";
    import ScrollFloat from "../component/title"
    import DecayCard from "../component/DecayCard";
    import Prof from "../assets/prof.jpg";
    import LogoLoop from "../component/Logoloop";


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
                <div className="text-center lg:mr-44 lg:ml-44 m-4 bg-blue-200 p-2 rounded-2xl ">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                    >
                        Work Experience
                    </ScrollFloat>
                </div>

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

                <div className="-mt-30 lg:-mt-50">
                    <LogoLoop />
                </div>
                    



                <div className="text-center lg:mr-44 lg:ml-44 m-4 bg-blue-200 p-2 rounded-2xl ">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                    >
                        Skills
                    </ScrollFloat>
                </div>
                    

                <div className="grid sm:grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 m-4">
                    <div className="flex justify-center items-start">
                        <DecayCard width={300} height={400} image={Prof}>
                        <h2>Sir<br
                            width={300}
                            height={400}
                            baseFrequency={0.015}
                            numOctaves={5}
                            seed={4}
                            maxDisplacement={400}
                            movementBound={50}
                            />Juls</h2>
                        </DecayCard>
                    </div>
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        <div className="card bg-base-100 image-full shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Teaching</h2>
                                <p>Passionate educator with experience teaching Information Technology courses, committed to creating engaging and practical learning experiences.</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 image-full shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Website Development</h2>
                                <p>Skilled in designing and developing responsive, user-friendly web applications using modern technologies such as HTML, CSS, JavaScript, React, PHP, Bootstrap, Tailwind CSS, and MySQL. </p>
                                
                            </div>
                        </div>
                        <div className="card bg-base-100 image-full shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Database Management</h2>
                                <p>Experienced in designing, implementing, and managing relational databases using MySQL and SQL. </p>
                            
                            </div>
                        </div>
                        <div className="card bg-base-100 image-full shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Computer Programming</h2>
                                <p>Strong foundation in software development and programming concepts using languages such as C++, C#, Java, JavaScript, PHP, and SQL. </p>
                            
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        )
    }
    export default Fifth