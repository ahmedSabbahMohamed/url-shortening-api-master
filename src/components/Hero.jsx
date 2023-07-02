import hero from '../images/illustration-working.svg';

function Hero() {
    return(
        <>
            <div className="container flex flex-col justify-between items-center gap-4 lg:flex-row-reverse my-12">
                <div className="flex-1">
                    <img className='w-full h-auto' src={hero} alt="hero" />
                </div>
                <div className="flex-1 text-center my-8 lg:text-left">
                    <h1 className="text-vdviolet text-3xl md:text-7xl font-bold">More than just shorter links</h1>
                    <p className="text-gviolet text-xl my-4">
                        Build your brand's recogonition and get detailed
                        insights on how your links are performing.
                    </p>
                    <button className="bg-cyan shadow-md rounded-full px-8 py-3 text-white font-bold border-2 border-cyan cursor-pointer ease-out duration-500 hover:scale-110 hover:bg-white hover:text-cyan">Get Started</button>
                </div>
            </div>
        </>
    );
}

export default Hero;