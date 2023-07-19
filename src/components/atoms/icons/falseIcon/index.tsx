import { theme } from '../../../../theme'

interface Props {
    size: number
    color: string
    maxHeight: number
}

function FalseIcon({
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
            <path
                stroke="#041E42"
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
            ></path>
        </svg>
    )
}
export default FalseIcon
