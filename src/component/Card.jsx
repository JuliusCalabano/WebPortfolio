import Gip from '../assets/gip.jpg'
import Inspic from '../assets/inspic.jpg'
import Prof from '../assets/prof.jpg'
import gradpic from '../assets/gradpic.jpg'

function Card(props){
    return(
        <div>
            <div className="hover-3d ">
                {/* content */}
                <figure className="w-72 h-52 sm:w-80 sm:h-60 md:w-96 md:h-64 rounded-2xl overflow-hidden">
                    <img src={props.image} alt="Tailwind CSS 3D card" className='w-full h-full object-cover '/>
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Card