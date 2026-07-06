import Gradpic from '../assets/gradpic.jpg'
import Gip from '../assets/gip.jpg'
import Inspic from '../assets/inspic.jpg'
import Prof from '../assets/prof.jpg'
import CircularGallery from '../component/CircularGallery';
import ShapeBlur from '../component/ShapeBlur';
import Lightfall from '../component/background'

function Intro() {

    return (
        <section id="Intro" className='relative'>
            <div style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                overflow: "hidden",
            }}>
                <Lightfall
                colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
                backgroundColor="#0A29FF"
                speed={0.5}
                streakCount={2}
                streakWidth={1}
                streakLength={1}
                glow={1}
                density={0.6}
                twinkle={1}
                zoom={3}
                backgroundGlow={0.5}
                opacity={1}
                mouseInteraction
                mouseStrength={0.5}
                mouseRadius={1}
                color1="#A6C8FF"
                color2="#5227FF"
                color3="#FF9FFC"
                />
            </div>
            <div
                className="hero min-h-screen"
            >
                <div>
                    <div style={{ height: '600px', position: 'relative', marginBottom: '350px' }}>
                        <CircularGallery
                            bend={1}
                            textColor="#ffffff"
                            borderRadius={0.05}
                            scrollEase={0.05}
                            // Optionally load a custom font for the labels.
                            // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
                            fontUrl=""
                            font="bold 30px Orbitron"
                            scrollSpeed={2}
                        />
                    </div>
                </div>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello I'm Julius P. Calabano, LPT</h1>
                        <p className="mb-5">
                            Hi! I'm an Information Technology educator and web developer passionate about building modern, user-friendly web applications. I enjoy creating innovative projects, exploring new technologies, and continuously improving my skills while helping others learn and grow in the field of IT.
                        </p>

                        <button className="relative w-48 h-14 overflow-hidden rounded-lg">
                            <div className="absolute inset-0">
                                <ShapeBlur
                                    className="w-full h-full"
                                    variation={0}
                                    shapeSize={1}
                                    roundness={0.5}
                                    borderSize={0.05}
                                    circleSize={0.25}
                                    circleEdge={1}
                                />
                            </div>

                            <span className="relative z-10 text-white font-semibold">
                                ✨
                            </span>
                        </button>

                    </div>
                </div>

            </div>
        </section>

    )
}
export default Intro;