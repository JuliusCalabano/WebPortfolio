import Gip from '../assets/gip.jpg'
import Inspic from '../assets/inspic.jpg'
import Prof from '../assets/prof.jpg'
import gradpic from '../assets/gradpic.jpg'
import Card from '../component/Card'
import ScrollFloat from '../component/title'
import Tecs from '../assets/tecs1pic.jpg'
import Luispalad from '../assets/luispaladcover.jpg'
import Cstcsariaya from '../assets/cstcsariaya.jpg'
import Slsulucena from '../assets/slsulucena.png'
import Batsu from '../assets/batsu.jpg'

function Second(){
    return (
        <section id='Educ' className='second'>
            
                <div className='m-8'>
                    <div className='text-center'>
                    <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            >
                            Educational Attainment
                        </ScrollFloat>
                    </div>
                    <div className="gallery rounded-2xl">
                        <div className="gallery-item">
                            <img src={Batsu} alt="" />
                            <div className="overlay">
                                <div className='educ-info'><h2>Batangas State University - Alangilan Campus <br /> GRADUATE SCHOOL (12 units, Ongoing)</h2>
                                <p>Master in Information Technology <br/>
                                        Batangas State University</p>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src={Slsulucena} alt="" />
                            <div className="overlay">
                                <div className='educ-info'><h2>Southern Luzon State University - Lucena Campus <br /> TERTIARY</h2>
                                <p>Southern Luzon State University, Lucena Campus Bachelor of Technical-Vocational Teacher Education (BTVTEd) <br/>
                                        Major in Computer Programming <br/>
                                        Brgy. Ibabang Dupay, Lucena City 2018-2022
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src={Cstcsariaya} alt="" />
                            <div className="overlay">
                                <div className='educ-info'><h2>College of Sciences, Technologies and Communication Inc. <br />SENIOR HIGH SCHOOL </h2>
                                <p>College of Sciences, Technologies and Communications Inc. <br/>
                                        Information and Communication Technology (ICT)<br/>
                                        Sariaya, Quezon<br/>
                                        2016-2018
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src={Luispalad} alt="" />
                            <div className="overlay">
                                <div className='educ-info'><h2> Luis Palad National High School <br /> Junior High School </h2>
                                <p>Luis Palad National High School<br/>
                                        Brgy. Ipilan Tayabas City <br/>
                                        2012-2016
                                </p>
                            </div>
                        </div>

                        <div className="gallery-item">
                            <img src={Tecs} alt="" />
                            <div className="overlay">
                                <div className='educ-info'><h2>Tayabas East Centeral School 1 <br /> Primary Education </h2>
                                <p>Tayabas East Central School I<br/>
                                        Tayabas City <br/>
                                        2006-2012
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Second