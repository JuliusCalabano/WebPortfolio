import Cstclogo from '../assets/cstclogo.png'
function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <aside>
                <img
                    width="150"
                    height="150"
                    viewBox="0 0 24 24"
                    src={Cstclogo}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-current">
                </img>
                <p>
                    College of Sciences, Technologies and Communications Inc.
                    <br />
                    School of Information Technology - Faculty
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/JuliusCalabano'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path d="M12 .297a12 12 0 0 0-3.79 23.39c.6.111.82-.261.82-.577v-2.257c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.304.762-1.604-2.665-.303-5.467-1.333-5.467-5.931 0-1.311.469-2.382 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 6.002 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.839 1.235 1.91 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.814 1.102.814 2.222v3.293c0 .319.216.694.825.576A12.003 12.003 0 0 0 12 .297z"/>
                        </svg>
                    </a>
                    <a href='https://www.youtube.com/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a href='https://www.facebook.com/JuliusCalabano'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
        </footer>
    )
}
export default Footer