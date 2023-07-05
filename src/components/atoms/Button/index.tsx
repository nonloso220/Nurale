import styled from 'styled-components'
/*interface Props {
  children?: any
  fullWidth?: boolean
}*/
const Button = styled.button`
    box-shadow: 0px 10px 14px -7px #276873;
    background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
    background-color: #599bb3;
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 12px;
    font-weight: bold;
    padding: 7px 16px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #3d768a;
    width: 'fit-content',
    height: 'fit-content',
`

/*const Button = ({ children, onClick, fullWidth = false }: Props) => {
  return (
    <button
      className={}
      
    >
      {children}
    </button>
  )
}*/

export default Button
