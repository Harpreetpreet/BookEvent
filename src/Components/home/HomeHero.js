const HomeHero = () => {
  return (
    <div className="z-40 relative md:mt-32 mt-10">
      <div className="z-40">
        <div className="md:max-w-lg max-w-md mx-auto">
          <div className=" text-white grid md:grid-cols-4 grid-cols-2 md:px-0 px-20">
            <div className=" flex flex-col items-center">
              <span className="bg-red-500 flex justify-center p-3 rounded px-4 text-3xl font-bold">
                00
              </span>{' '}
              <div className="text-red-600 text-xl font-semibold pt-3">
                Days
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <span className="bg-blue-500 flex justify-center p-3 rounded px-4 text-3xl font-bold">
                00
              </span>
              <div className="text-green-500 text-xl font-semibold pt-3">
                Hours
              </div>
            </div>
            <div className=" flex flex-col items-center ">
              <span className="bg-green-500 flex justify-center p-3 rounded px-4 text-3xl font-bold">
                00
              </span>{' '}
              <div className="text-blue-500 text-xl font-semibold pt-3">
                Minutes
              </div>
            </div>
            <div className=" flex flex-col items-center ">
              <span className="bg-yellow-500 flex justify-center p-3 rounded px-4 text-3xl font-bold">
                00
              </span>{' '}
              <div className="text-yellow-500 text-xl font-semibold pt-3">
                Seconds
              </div>
            </div>
          </div>
        </div>
        <div className="  text-white text-center space-y-4 mt-10">
          <h1 className=" md:text-6xl text-5xl font-bold">
            {' '}
            DESIGN & DEV CONFERENCE
          </h1>
          <h2 className="md:text-4xl  text-2xl font-bold">
            OCTOBER, 17th - 19th, 2020
          </h2>
          <h3 className="md:text-xl text-xm font-bold pb-6">
            Jurys Inn Brighton Waterfront Hotel, Brighton, London
          </h3>
          <button
            onClick={() => alert('You have been successfully registered...')}
            type="button"
            className="p-4 px-8 bg-brand text-white font-medium text-xm leading-tight rounded shadow-md hover:shadow-lg active:bg-pink-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            REGISTER NOW
          </button>
        </div>
      </div>
      <div className="-z-30 absolute -mt-10 -top-12 left-0 right-0 -bottom-12">
        <div className="h-full w-full max-w-sm mx-auto text-white md:border-[18px] border-0 border-primary"></div>
      </div>
    </div>
  );
};

export default HomeHero;
