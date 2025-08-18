export function UKFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={16}
      viewBox="0 0 60 30"
      {...props}
    >
      <clipPath id="a">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <path fill="#00247d" d="M0 0v30h60V0z" />
      <path stroke="#fff" strokeWidth={6} d="m0 0 60 30m0-30L0 30" />
      <path
        stroke="#cf142b"
        strokeWidth={4}
        d="m0 0 60 30m0-30L0 30"
        clipPath="url(#a)"
      />
      <path stroke="#fff" strokeWidth={10} d="M30 0v30M0 15h60" />
      <path stroke="#cf142b" strokeWidth={6} d="M30 0v30M0 15h60" />
    </svg>
  );
}
