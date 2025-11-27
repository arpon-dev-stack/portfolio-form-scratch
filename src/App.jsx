import Main from "./components/Main/Main";
import { assets } from "./assets/Assets";

function App() {
  return (
    <main className="h-auto min-w-xs relative w-full">
      <div className="h-screen w-full bg-amber-500 fixed inset-0 -z-10"></div>
      <header className="min-h-[306px] mt-1 mx-1">
        <section className="bg-red-500 w-full h-[82px] flex flex-col-reverse justify-between">
          <div className=" flex items-center w-[119px] h-[34px] border justify-between pr-1 rounded-full">
            <img src={assets.portImg} alt="portfolioImage" className="h-9 w-auto rounded-full"/>
            <span className="text-[14px] font-medium">Arpon das</span>
          </div>
          <div className="text-[20px] font-bold">Merry Christmas</div>
        </section>
        <section className="h-[171px] w-full bg-red-700 flex">
          <div className="min-w-[136px] grow flex flex-col pl-2">
            <span className="text-[19px] font-bold mt-1">Fullstack developer</span>
            <span className="text-[14px] font-semibold mt-3">Technology: MERN, PERN</span>
            <span className="text-[14px] font-semibold mt-3">Speciality: Commercial and Futuristic Web app</span>
          </div>
          <div className="w-[148px] h-full bg-amber-400 flex flex-col">
            <div className="grow w-full bg-cyan-50"></div>
            <div className="w-[148px] h-[148px] bg-red-600 rounded-lg"></div>
          </div>
        </section>
        <section className="text-[11px] font-bold text-center">For better experience please increase you device volume</section>
      </header>
    </main>
  )
}

export default App;