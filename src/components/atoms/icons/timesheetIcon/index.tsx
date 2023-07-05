import { theme } from '../../../../theme'

interface Props {
    size: number
    color: string
    maxHeight: number
}

function TimesheetIcon({
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
                r="9"
                stroke={color}
                strokeWidth="1.7"
            ></circle>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeWidth="1.7"
                d="M16.5 12h-4.25a.25.25 0 01-.25-.25V8.5"
            ></path>
        </svg>
    )
}
export default TimesheetIcon
