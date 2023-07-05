import { styled } from 'styled-components'

interface Props {
    show: boolean
    bgcolor?: string
    width?: number
    color?: string
    leftMargin?: string
    background?: string
}

const Modal = styled.div<Props>`
    display: ${({ show }) => (show ? 'block' : 'none')};
    zindex: 100000;
    width: ${({ width }) => `${width}px` || '100vw'};
    background-color: ${({ bgcolor }) => bgcolor || 'white'};
    color: ${({ color }) => color || ' '};
`

export default Modal
