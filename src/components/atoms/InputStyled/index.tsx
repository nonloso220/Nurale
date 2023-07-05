import styled from 'styled-components'

/*interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}*/
const InputStyled = styled.input`
    padding: 5px;
    font-size: 10px;
    border-width: 1px;
    border-color: #cccccc;
    background-color: #ffffff;
    color: #000000;
    border-style: solid;
    border-radius: 0px;
    box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
    height: fit-content;
    width: fit-content;
    margin-top: 2px;
`
/*

block w-fit pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
const Input = ({ placeholder, type = "text", label, error, ...rest }: Props) => {
  return (
    <div>
      <label className="block wtext-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          placeholder={placeholder}
          type={type}
          className="block w-fit pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...rest}
        />
      </div>
      <div style={{ color: "red" }}>{error}</div>
    </div>
  )
}*/

export default InputStyled
