import { assets } from "../../assets/Assets";

function Header() {
    return (
        <header className="min-h-[306px]">
            <section className="bg-transparent w-full h-[82px] flex flex-col-reverse justify-between">
                <span className="inline h-[34px] border rounded-full w-32">
                    <img src={assets.portImg} alt="portfolioImage" className="h-full inline w-auto rounded-full" />
                    <span className="text-[14px] inline font-medium ml-2">Arpon das</span>
                </span>
                <div className="text-[20px] font-bold">Merry Christmas</div>
            </section>
            <section className="h-[171px] w-full bg-transparent flex">
                <div className="min-w-[136px] grow flex flex-col">
                    <span className="text-[19px] font-bold mt-1">Fullstack developer</span>
                    <span className="text-[14px] font-semibold mt-3">Technology: MERN, PERN</span>
                    <span className="text-[14px] font-semibold mt-3">Speciality: Commercial and Futuristic Web app</span>
                </div>
                <div className="w-[148px] h-full bg-transparent flex flex-col">
                    <h2 className="grow w-full bg-transparent text-center">Projct-1</h2>
                    <div className="w-[148px] h-[148px] bg-[rgb(217_217_217)] rounded-lg"></div>
                </div>
            </section>
            <section className="text-[11px] font-bold text-center mt-2">For better experience please increase you device volume</section>
        </header>
    )
}

export default Header;