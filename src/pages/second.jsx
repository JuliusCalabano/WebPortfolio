import { useState, useEffect } from "react";
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

const education = [
  {
    image: Batsu,
    title: "Batangas State University - Alangilan Campus",
    subtitle: "GRADUATE SCHOOL (21 units, Ongoing)",
    description:
      "Master in Information Technology\nBatangas State University",
  },
  {
    image: Slsulucena,
    title: "Southern Luzon State University - Lucena Campus",
    subtitle: "TERTIARY",
    description:
      "Bachelor of Technical-Vocational Teacher Education (BTVTEd)\nMajor in Computer Programming\nBrgy. Ibabang Dupay, Lucena City\n2018-2022",
  },
  {
    image: Cstcsariaya,
    title: "College of Sciences, Technologies and Communication Inc.",
    subtitle: "SENIOR HIGH SCHOOL",
    description:
      "Information and Communication Technology (ICT)\nSariaya, Quezon\n2016-2018",
  },
  {
    image: Luispalad,
    title: "Luis Palad National High School",
    subtitle: "JUNIOR HIGH SCHOOL",
    description:
      "Brgy. Ipilan Tayabas City\n2012-2016",
  },
  {
    image: Tecs,
    title: "Tayabas East Central School I",
    subtitle: "PRIMARY EDUCATION",
    description:
      "Tayabas City\n2006-2012",
  },
];


function Second(){
    const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % education.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

    return (
        <section id='Educ' className='second'>
            
                <div>
                    <div className='text-center'>
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            >
                            Education Background
                        </ScrollFloat>
                    </div>
                    
                    <div className="overflow-hidden rounded-2xl ml-8 mr-8">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                            transform: `translateX(-${current * 100}%)`,
                            }}
                        >
                            {education.map((school, index) => (
                            <div
                                key={index}
                                className="min-w-full relative gallery-item"
                            >
                                <img
                                src={school.image}
                                alt={school.title}
                                className="w-full h-125 object-cover"
                                />

                                <div className="overlay">
                                <div className="educ-info">
                                    <h2>
                                    {school.title}
                                    <br />
                                    {school.subtitle}
                                    </h2>

                                    <p style={{ whiteSpace: "pre-line" }}>
                                    {school.description}
                                    </p>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                    
        </div>
        </section>
    )
}
export default Second