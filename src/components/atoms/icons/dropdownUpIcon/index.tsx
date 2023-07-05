import { theme } from '../../../../theme'

interface Props {
    size: number
    color: string
    maxHeight: number
}

function DropdownUpIcon({
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
                stroke={color}
                d="M6.933.75L11.696 9a.5.5 0 01-.433.75H1.737A.5.5 0 011.304 9L6.067.75a.5.5 0 01.866 0z"
            ></path>
        </svg>
    )
}
export default DropdownUpIcon
