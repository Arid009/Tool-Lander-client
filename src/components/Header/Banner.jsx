

const Banner = () => {
    return (
        <div>

            <section className="bg-gradient-to-t lg:bg-gradient-to-r from-orange-500 to-orange-200">
                <div className="py-5 px-4 flex justify-evenly items-center flex-col-reverse lg:flex-row mx-auto max-w-screen-xl text-center lg:py-16">
                    <div>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-orange-100 md:text-5xl lg:text-4xl dark:text-white">Get the tools you need, <br /> when you need them</h1>
                    </div>
                    <div>
                        <img src="https://previews.123rf.com/images/seamartini/seamartini1708/seamartini170800298/84011146-hand-tool-banner-set-for-hardware-store-design.jpg" className="w-[300px] md:w-[400px]" alt="" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;