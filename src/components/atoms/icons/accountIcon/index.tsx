import { theme } from '../../../../theme'

interface Props {
    size: number
    color: string
    maxHeight: number
}

function AccountIcon({
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
                cy="10"
                r="3"
                stroke={color}
                strokeLinecap="round"
                strokeWidth="1.7"
            ></circle>
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke={color}
                strokeWidth="1.7"
            ></circle>
            <path
                fill={color}
                d="M17.78 18.826a.286.286 0 00.134-.355c-.386-.966-1.128-1.818-2.133-2.438C14.697 15.363 13.367 15 12 15s-2.697.363-3.781 1.033c-1.005.62-1.747 1.471-2.133 2.438a.286.286 0 00.133.355 12.011 12.011 0 0011.561 0z"
            ></path>
        </svg>
    )
}
export default AccountIcon
