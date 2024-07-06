const ChevronLeft = () => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      <rect
        width="512"
        height="512"
        x="0"
        y="0"
        rx="30"
        fill="transparent"
        stroke="transparent"
        stroke-width="0"
        stroke-opacity="100%"
        paint-order="stroke"
      ></rect>
      <svg
        width="457px"
        height="457px"
        viewBox="0 0 24 24"
        fill="#000000"
        x="27.5"
        y="27.5"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="black">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m15 4l-8 8l8 8"
          />
        </g>
      </svg>
    </svg>
  );
};
export { ChevronLeft };
