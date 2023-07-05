import { theme } from '../../../../theme'

interface Props {
    size: number
    color: string
    maxHeight: number
}

function DarkmodeIcon({
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
            <circle
                cx="12"
                cy="12"
                r="3"
                stroke={color}
                strokeWidth="1.7"
            ></circle>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeWidth="1.7"
                d="M12 5V3m0 18v-2m4.95-11.95l1.414-1.414M5.636 18.364L7.05 16.95M19 12h2M3 12h2m11.95 4.95l1.414 1.414M5.636 5.636L7.05 7.05"
            ></path>
        </svg>
    )
}
export default DarkmodeIcon
