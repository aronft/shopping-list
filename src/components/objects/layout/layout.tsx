export const Layout = () => {
    return (
        <div
            className="h-full grid"
            style={{ gridTemplateColumns: '93px 1fr 389px' }}
        >
            <nav className="w-[100px] h-full bg-white">
                <img src="" alt="" />
            </nav>

            <div className="pt-[27px] px-[80px]">
                <header>
                    <h1 className="text-xl text-gray-800 font-bold">
                        <span className="text-yellow-700 font-medium">
                            Shoppingify{' '}
                        </span>
                        allows you take your hopping list wherever you go
                    </h1>
                </header>
                <main>
                    <section>
                        <h2 className="text-black text-md ">
                            Fruid and vegetables
                        </h2>
                        <p className="text-base text-white font-bold ">
                            Didn't find what you need?
                        </p>
                    </section>
                </main>
            </div>

            <div className="h-full ">
                {/* renderizar dinamicamente que se usara por defecto sera shopping list - list */}
            </div>
        </div>
    );
};
