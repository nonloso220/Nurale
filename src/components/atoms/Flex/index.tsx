import styled from 'styled-components'
// import { Flex, forwardRef, FlexProps, FlexboxProps } from '@chakra-ui/react';
interface Props {
    column?: string
    width?: number
    height?: number
    border?: string
    padding?: number
    leftMargin?: number
    alignItems?: 'flex-start' | 'end' | 'center'
    bgcolor?: string
    heightType?: string
    widthType?: string
}

const Flex = styled.div<Props>`
display: flex;
flex-direction: ${({ column }) => column || 'row'};
align-items ${({ alignItems }) => alignItems || ''};
width: ${({ width, widthType = 'vw' }) => `${width}${widthType}` || '100%'};//vw
height: ${({ height, heightType = 'vh' }) =>
    `${height}${heightType}` || '50%'};//vh
border: ${({ border }) => border || ''};
padding: ${({ padding }) => `${padding}rem` || '10px'};
margin-left:${({ leftMargin }) => `${leftMargin}px` || '10px'};
background:${({ bgcolor }) => bgcolor || '#242424'}
`
/* 
display: flex;
flex-direction: ${({ column }) => column || 'row'};

({children,
  column = false,
  alignItems,
  width,
  border,
  padding,
  height,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: column ? "column" : "row",
        alignItems: alignItems ? alignItems : "",
        width: width ? `${width}px` : "",
        height: height ? `${height}px` : "",
        border: border ? border : "",
        padding: padding ? `${padding}px` : "",
      }}
    >
      {children}
    </div>
  )
}*/

export default Flex
