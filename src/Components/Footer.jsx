export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="bg-[#0b0614] py-4 px-6 flex items-center justify-between">
            {/* ✅ Centered Footer Text */}
            <p className="text-gray-400 text-sm md:text-base text-center flex-1">
                © 2025 Developed by Sugumar Jagadeesh{" "}
                <span className="text-white font-semibold">Built using React.js.</span>
            </p>

            {/* ✅ Button on the same line, right-aligned, with size 35x35 */}
            <button
                onClick={scrollToTop}
                className="w-[35px] h-[35px] flex items-center justify-center border border-purple-500 rounded-full hover:bg-purple-500 transition duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] text-purple-500 hover:text-white transition duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </footer>
    );
}
