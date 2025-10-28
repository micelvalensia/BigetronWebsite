import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="bg-[radial-gradient(circle,#9E0B04_23%,#700802_61%,#410500_100%)] min-h-dvh 3xl:min-h-[105vh] overflow-hidden flex justify-center relative">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:mt-10 relative md:max-w-7xl">
                <h1 className="font-anton text-[#F6EEE1] text-8xl md:text-[13rem] text-center">
                    <span className="inline-block tracking-wide md:tracking-[3rem]">BIGETRO</span>
                    <span className="inline-block">N</span>
                </h1>
                <div className="flex items-center justify-between md:hidden mb-[60%] font-anton">
                    <span>BY VITALITY</span>
                    <div className="flex flex-col ml-44">
                        <span>PROGRAMMED</span>
                        <span>TO WIN</span>
                    </div>
                </div>
                <div className="hidden absolute left-1/2 -translate-x-1/2 top-[55%] w-[40em] md:flex justify-between font-anton text-4xl tracking-widest">
                    <span>BY VITALITY</span>
                    <div className="flex flex-col ml-44">
                        <span>PROGRAMMED</span>
                        <span>TO WIN</span>
                    </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 md:top-0 w-[120vw] md:w-[50vw]">
                    <Image
                        alt="hero section"
                        src="/assets/hero.png"
                        width={850}
                        height={839}
                        sizes="60vw"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
            <div className="w-full absolute bottom-0 left-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_30%,rgba(0,0,0,0.8)_100%)] h-[30%]"></div>
        </div>
    )
}