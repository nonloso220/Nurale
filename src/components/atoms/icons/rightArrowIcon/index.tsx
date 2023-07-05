import { theme } from '../../../../theme'

interface Props {
    size: number
    color: string
    maxHeight: number
}

function RightArrowIcon({
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
                fill="#FFFFFF"
                d="M13.5 6.634a1 1 0 010 1.732L2.25 14.861a1 1 0 01-1.5-.866V1.005a1 1 0 011.5-.866L13.5 6.634z"
            ></path>
        </svg>
    )
}
export default RightArrowIcon
