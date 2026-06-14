export default function Footer() {
    return (
        <>
            <footer className="border-t border-white/10 py-6">
                <div className="mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 max-w-6xl items-center justify-between px-4 text-white/40">
                    <p className="text-xs sm:text-base">  Built with code, driven by curiosity • {new Date().getFullYear()} </p>

                    <button
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }}
                        className="transition hover:text-white cursor-pointer text-xs sm:text-base"
                    >
                        Back to Top <span className="ri-arrow-up-s-line"></span>
                    </button>
                </div>
            </footer>
        </>
    )
}