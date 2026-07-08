import ScrollFloat from "../component/title"
function Fourth() {
    return (

        <div id="Achieve" className="m-8 mt-20 hiiden md:grid grid-cols-2">
            <div className="items-center lg:items-start gap-8 px-4 mt-4 lg:mt-[180px]">
                <div className="lg:text-left m-4 lg:m-8 bg-blue-200 p-2 rounded-2xl" >
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                    >
                        Achievement
                    </ScrollFloat>
                </div>
                <div>


                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">TERTIARY:</div>
                        <div className="collapse-content text-sm">
                            • LATIN HONOR - CUM LAUDE <br />
                            • Dean’s Lister year 2018 - 2019 2st Semester<br />
                            • Dean’s Lister year 2019 - 2020 1st and 2nd Semester<br />
                            • Dean’s Lister year 2020 - 2021 2nd Semester<br />
                            • Dean’s Lister year 2021 - 2022 1st Semester
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">
                            SENIOR HIGH SCHOOL:
                        </div>
                        <div className="collapse-content text-sm">
                            • Graduated With Honor Grade 11 <br />
                            • Graduated With Honor Grade 12
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">LEADERSHIP BACKGROUND/ OGANIZATION</div>
                        <div className="collapse-content text-sm">
                            • Graduating Batch Officer – Representative
                            Southern Luzon State University, Lucena Campus 2021 to present <br />
                            • Team Sprite - Junior Network Analyst 2019<br />
                            • TEACH SOCIETY – Member
                            Southern Luzon State University, Lucena Campus 2018-present
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">TESDA WORLD SKILLS COMPETITION IN WEB TECHNOLOGIES AS COACH</div>
                        <div className="collapse-content text-sm">
                            • WORLD SKILLS QUEZON-PROVINCE - GOLD 🥇<br />
                            • WORLD SKILLS QUEZON-REGIONAL - SILVER 🥈
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:items-start gap-8 px-4 mt-4 lg:mt-[180px]">
                <div className="lg:text-left m-4 lg:m-8 bg-blue-200 p-2 rounded-2xl">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                    >
                        Eligibility
                    </ScrollFloat>
                </div>
                <div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">Civil Service Eligibility for HONOR GRADUATE</div>
                        <div className="collapse-content text-sm">
                            • ID Number = 10010******2 <br />
                            • Year of Validity - N/A
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">Non-Professional Driver's License</div>
                        <div className="collapse-content text-sm">
                            • ID Number - DO9-23-00**** <br />
                            • Year of Validity - October 5, 2027
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">Professional License for Teacher - TLE Secondary Education</div>
                        <div className="collapse-content text-sm">
                            • ID Number - 214**** <br />
                            • Year of Validity - October 5, 2027
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Fourth