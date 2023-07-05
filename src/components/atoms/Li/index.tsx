import styled from 'styled-components'
interface Props {
    current?: boolean
    marginRight?: string
    width?: string
}
const Li = styled.div<Props>`
    font-family: 'Lato';
    margin-right: ${({ marginRight }) => marginRight || '2rem'};
    padding: '0px';
    background-color: 'gray';
    border: '0px';
    width: ${({ width }) => width || '100%'};
    height: fit-content;
    list-style: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
        background-color: rgba(123, 97, 255, 0.05);
    }
    color: ${(p) => (p.current ? '#EF426F' : 'black')};
`
// variant="ghost"
export default Li
