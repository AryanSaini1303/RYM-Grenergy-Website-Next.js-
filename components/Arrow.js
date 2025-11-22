export function ArrowRightUp({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="1.3em"
      height="1.3em"
    >
      <g
        fill="none"
        stroke={!color ? '#000' : color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M19 11H37V29"></path>
        <path d="M11.5439 36.4559L36.9997 11"></path>
      </g>
    </svg>
  );
}
