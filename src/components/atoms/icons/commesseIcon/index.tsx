import { theme } from '../../../../theme'

interface Props {
    size: number
    color: string
    maxHeight: number
}

function CommesseIcon({
    size = 24,
    color = `${theme.colors.main}`, //041E42
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
            <rect
                width="18"
                height="13"
                x="3"
                y="6"
                stroke={color}
                strokeWidth="1.7"
                rx="2"
            ></rect>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeWidth="1.7"
                d="M7 15h.01M4 11h17"
            ></path>
        </svg>
    )
}
export default CommesseIcon
