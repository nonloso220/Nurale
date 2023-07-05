import { theme } from '../../../../theme'

interface Props {
    size: number
    color: string
    maxHeight: number
}

function HomeIcon({
    size = 24,
    color = `${theme.colors.main}`, //041E42
    maxHeight,
}: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            style={{
                width: `${size}rem`,
                height: `${size}rem`,
                maxHeight: maxHeight && `${maxHeight}rem`,
            }}
        >
            <circle
                cx="12.5"
                cy="12.5"
                r="12.5"
                fill="url(#paint0_linear_17_55)"
            ></circle>
            <path
                fill="#fff"
                d="M5.447 13.366a1 1 0 010-1.732l9.83-5.675a1 1 0 011.5.866v11.35a1 1 0 01-1.5.866l-9.83-5.675z"
            ></path>
            <defs>
                <linearGradient
                    id="paint0_linear_17_55"
                    x1="0"
                    x2="25"
                    y1="12.5"
                    y2="12.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EF426F"></stop>
                    <stop offset="1" stopColor="#514689"></stop>
                </linearGradient>
            </defs>
        </svg>
    )
}
export default HomeIcon
