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
            <div>
                <div className="flex w-full flex-col">
                    <div className="card bg-slate-900/20 rounded-box place-items-center container">
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            >
                            Educational Attainment
                        </ScrollFloat>
                        
                        <div className="flex w-full flex-col lg:flex-row">

                            <div className="card bg-blue-900/50 rounded-box grow place-items-center m-4">
                                <Card 
                                    image={Batsu}
                                />
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div className="card bg-blue-900/50 rounded-box grow m-4 max-w-2xl">
                                <div className='m-4'>
                                    <h1><strong>GRADUATE SCHOOL (12 units, Ongoing)</strong></h1>
                                    <p>
                                        Master in Information Technology <br/>
                                        Batangas State University
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="flex w-full flex-col lg:flex-row mt-16">
                            <div className="card bg-blue-900/50 rounded-box grow place-items-center m-4">
                                <Card 
                                    image={Slsulucena}
                                />
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div className="card bg-blue-900/50 rounded-box grow m-4 max-w-2xl">
                                <div className='m-4'>
                                    <h1><strong>TERTIARY</strong></h1>
                                    <p>
                                        Southern Luzon State University, Lucena Campus Bachelor of Technical-Vocational Teacher Education (BTVTEd) <br/>
                                        Major in Computer Programming <br/>
                                        Brgy. Ibabang Dupay, Lucena City 2018-2022
                                    </p>
                                </div>
                            </div>
                            
                        </div>

                        <div className="flex w-full flex-col lg:flex-row mt-16">
                            <div className="card bg-blue-900/50 rounded-box grow place-items-center m-4">
                                <Card 
                                    image={Cstcsariaya}
                                />
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div className="card bg-blue-900/50 rounded-box grow m-4 max-w-2xl">
                                <div className='m-4'>
                                    <h1><strong>SENIOR HIGH SCHOOL</strong></h1>
                                    <p>
                                        College of Sciences, Technologies and Communications Inc. <br/>
                                        Information and Communication Technology (ICT)<br/>
                                        Sariaya, Quezon<br/>
                                        2016-2018
                                    </p>
                                </div>
                            </div>
                            
                        </div>

                        <div className="flex w-full flex-col lg:flex-row mt-16">
                            <div className="card bg-blue-900/50 rounded-box grow place-items-center m-4">
                                <Card 
                                    image={Luispalad}
                                />
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div className="card bg-blue-900/50 rounded-box grow m-4 max-w-2xl">
                                <div className='m-4'>
                                    <h1><strong>JUNIOR HIGH SCHOOL</strong></h1>
                                    <p>
                                        Luis Palad National High School<br/>
                                        Brgy. Ipilan Tayabas City <br/>
                                        2012-2016
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex w-full flex-col lg:flex-row mt-16">
                            <div className="card bg-blue-900/50 rounded-box grow place-items-center m-4">
                                <Card 
                                    image={Tecs}
                                />
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div className="card bg-blue-900/50 rounded-box grow m-4 max-w-2xl">
                                <div className='m-4'>
                                    <h1><strong>PRIMARY</strong></h1>
                                    <p>
                                        Tayabas East Central School I<br/>
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