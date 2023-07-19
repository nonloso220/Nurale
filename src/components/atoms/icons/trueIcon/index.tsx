interface Props {
    size: number
    color: string
    maxHeight: number
}

function TrueIcon({
    size = 24,
    // color = `${theme.colors.main}`, //041E42
    maxHeight,
}: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            style={{
                width: `${size}rem`,
                height: `${size}rem`,
                maxHeight: maxHeight && `${maxHeight}rem`,
            }}
        >
            <path
                stroke="#041E42"
                stroke-width="3"
                d="M6.667 18.667l5.333 4L24 8"
            ></path>
        </svg>
    )
}
export default TrueIcon
