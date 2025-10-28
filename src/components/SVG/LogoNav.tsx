"use client"

export default function LogoNav({handleClick}:any) {
  return (
    <svg
      viewBox="0 0 250 200"
      className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] h-auto hover:cursor-pointer"
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="transition-all hover:[&_path]:fill-[#1b1b1b]" onClick={handleClick}
>
        <path
          d="M 10 0 L 250 0 L 200 160 L 60 160 Z"
          fill="#323232"
        />

        <image
          href="/assets/logo.png"
          x="25"
          y="-5"
          width="85%"
          height="85%"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </svg>
  );
}
