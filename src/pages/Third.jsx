import ScrollFloat from '../component/title'
import Gip from '../assets/gip.jpg'
import Inspic from '../assets/inspic.jpg'
import Prof from '../assets/prof.jpg'
import gradpic from '../assets/gradpic.jpg'
import InfiniteMenu from "../component/InfiniteMenu";
import Juls1 from '../assets/img/Juls (1).jpg'
import Juls2 from '../assets/img/Juls (2).jpg'
import Juls3 from '../assets/img/Juls (3).jpg'
import Juls4 from '../assets/img/Juls (4).jpg'
import Juls5 from '../assets/img/Juls (5).jpg'
import Juls6 from '../assets/img/Juls (6).jpg'
import Juls7 from '../assets/img/Juls (7).jpg'
import Juls8 from '../assets/img/Juls (8).jpg'
import Juls9 from '../assets/img/Juls (9).jpg'
import Juls10 from '../assets/img/Juls (10).jpg'
import Juls11 from '../assets/img/Juls (11).jpg'
import Juls12 from '../assets/img/Juls (12).jpg'
import Juls13 from '../assets/img/Juls (13).jpg'
import Juls14 from '../assets/img/Juls (14).jpg'
import Juls15 from '../assets/img/Juls (15).jpg'
import Juls16 from '../assets/img/Juls (16).jpg'
import Juls17 from '../assets/img/Juls (17).jpg'
import Juls18 from '../assets/img/Juls (18).jpg'
import Juls19 from '../assets/img/Juls (19).jpg'
import Juls20 from '../assets/img/Juls (20).jpg'
import Juls21 from '../assets/img/Juls (21).jpg'
import Juls22 from '../assets/img/Juls (22).jpg'

function Third(props) {

    const items = [
        {
            image: Gip,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 1",
            description: "This is pretty cool, right?"
        },
        {
            image: Inspic,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 2",
            description: "This is pretty cool, right?"
        },
        {
            image: Prof,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 3",
            description: "This is pretty cool, right?"
        },
        {
            image: gradpic,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 4",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls1,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 5",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls2,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 6",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls3,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 7",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls4,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 8",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls5,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 9",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls6,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 10",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls7,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 11",
            description: "This is pretty cool, right?"
        },

        {
            image: Juls8,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 12",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls9,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 13",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls10,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 14",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls11,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 15",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls12,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 16",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls13,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 17",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls14,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 18",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls15,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 19",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls16,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 20",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls17,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 21",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls18,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 22",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls19,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 23",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls20,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 24",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls21,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 25",
            description: "This is pretty cool, right?"
        },
        {
            image: Juls22,
            link: "https://www.facebook.com/JuliusCalabano",
            title: "Item 26",
            description: "This is pretty cool, right?"
        }
    ];

    return (
        <div style={{ height: "600px", position: "relative" }}>
            <div className='text-center'>
                    <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            >
                            My Hobbies and Interest
                        </ScrollFloat>
                    </div>
            <InfiniteMenu
                items={items}
                scale={1}
            />
        </div>
    );
}

export default Third;