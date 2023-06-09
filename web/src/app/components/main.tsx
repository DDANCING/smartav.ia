export function Maingrid() {
  return (
    <main className="grid grid-cols-3 gap-2 h-[484px] mt-5 ml-5 mr-5">
      <div className="grid desktop:w-64 justify-self-start">
        <div className=" bg-Smartaviblack-50/40 h-[372px] mb-[0]">
          <div className="bg-Smartaviblack-50/30 m-1 p-3">
            <a
              className="text-Smartavigray-50 text-3xl m-1 hover:bg-Smartavigray-50/10"
              href="http://localhost:3000/"
            >
              aviario
            </a>
            <h2 className="text-Smartavigray-50 text-sm m-1">Cascavel</h2>
          </div>
        </div>
        <div className="bg-Smartaviblack-50/40 p-2">
          <div className="bg-Smartaviblack-50/20 h-full w-full ">
            <h1 className="text-Smartavigray-50 text-3xl m-1">Local</h1>
            <h2 className="text-Smartavigray-50 text-sm m-1">Cascavel</h2>
          </div>
        </div>
      </div>
      <div className="bg-Smartaviblack-50/40 box-content justify-self-center ">
        <div className="bg-black h-[462px] w-[750px] m-2 rounded"></div>
      </div>
      <div className="desktop:bg-Smartaviblack-50/40 w-64 justify-self-end ">
        03
      </div>
    </main>
  )
}
