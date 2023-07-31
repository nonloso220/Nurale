import { ReactElement, useEffect, useState } from 'react'
import InputPage from '../../molecules/InputPage'
import { theme } from '../../../theme'
import { Flex } from '../../atoms'
import { Text } from '@chakra-ui/react'
import Icons from '../../atoms/icons'

interface Props {
    skip: number
    take: number
    totalElement: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    // setSkip: (skip: number) => void
    handlePagination: (page: number) => void
}

const Paginate = ({
    skip,
    take,
    totalElement,
    currentPage,
    setCurrentPage,
    handlePagination,
}: Props): ReactElement => {
    const [pages, setPages] = useState<number>()

    useEffect(() => {
        totalElement === take
            ? setPages(Math.floor(totalElement / take))
            : setPages(Math.floor(totalElement / take) + 1)
        // setPages(Math.floor(totalElement / take) + 1)
    }, [totalElement])
    // const calcoloPages = async () => {
    //     await
    // }
    return (
        <Flex style={{ width: '100%', marginTop: '2rem' }} bgcolor="white">
            <Flex
                bgcolor="white"
                style={{
                    width: '100%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}
            >
                <Flex
                    bgcolor="white"
                    width={6.9}
                    widthType="rem"
                    style={{
                        marginLeft: '1.5rem',
                        marginRight: '0.9rem',
                        alignItems: 'center',
                    }}
                >
                    <InputPage
                        value={currentPage}
                        type="number"
                        label="Pagina"
                        placeholder="Num. pagina"
                        fontWeight={theme.fontWeights.bold}
                        name={''}
                    />
                </Flex>

                <Flex
                    bgcolor="white"
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <Text
                        fontWeight="bold"
                        fontSize="md"
                        lineHeight="normal"
                        color="main2"
                        marginRight="0.5rem"
                        display="inline-block"
                    >
                        di
                    </Text>
                    <Text
                        fontWeight="bold"
                        fontSize="md"
                        marginRight="1rem"
                        lineHeight="normal"
                        color="main2"
                    >
                        {pages}
                    </Text>
                </Flex>

                {pages === 1 ? (
                    <Flex
                        style={{
                            backgroundColor: 'disabled',
                            width: '2rem',
                            height: '2rem',
                            paddingTop: '7px',
                            paddingLeft: '9px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '0.5rem',
                            marginLeft: '1.9rem',
                            marginRight: '0.6rem',
                            cursor: 'pointer',
                        }}
                    >
                        <Icons
                            name="leftArrowIcon"
                            size={1.3}
                            color="white"
                        ></Icons>
                    </Flex>
                ) : currentPage == 1 ? (
                    <Flex
                        style={{
                            backgroundColor: 'disabled',
                            width: '2rem',
                            height: '2rem',
                            paddingTop: '7px',
                            paddingLeft: '9px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '0.5rem',
                            marginLeft: '1.9rem',
                            marginRight: '0.6rem',
                            cursor: 'pointer',
                        }}
                    >
                        <Icons
                            name="leftArrowIcon"
                            size={1.3}
                            color="white"
                        ></Icons>
                    </Flex>
                ) : (
                    <Flex
                        style={{
                            backgroundColor: 'secondary',
                            width: '2rem',
                            height: '2rem',
                            paddingTop: '7px',
                            paddingLeft: '9px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '0.5rem',
                            marginLeft: '1.9rem',
                            marginRight: '0.6rem',
                            cursor: 'pointer',
                        }}
                        // _hover={{ backgroundColor: 'secondary' }}
                        onClick={() => {
                            handlePagination(skip - take)
                            setCurrentPage(currentPage - 1)
                        }}
                    >
                        <Icons
                            name="leftArrowIcon"
                            size={1.3}
                            color="white"
                        ></Icons>
                    </Flex>
                )}

                {pages === currentPage ? (
                    <Flex
                        style={{
                            backgroundColor: 'disabled',
                            width: '2rem',
                            height: '2rem',
                            paddingTop: '7px',
                            paddingLeft: '9px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '0.5rem',
                            marginRight: '1rem',
                            cursor: 'pointer',
                        }}
                    >
                        <Icons name="rightArrowIcon" size={1.3} color="white" />
                    </Flex>
                ) : (
                    <Flex
                        style={{
                            backgroundColor: 'secondary',
                            width: '2rem',
                            height: '2rem',
                            paddingTop: '7px',
                            paddingLeft: '9px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '0.5rem',
                            marginRight: '1rem',
                            cursor: 'pointer',
                        }}
                        // _hover={{ backgroundColor: 'secondary' }}
                        onClick={() => {
                            handlePagination(skip + take)
                            setCurrentPage(currentPage + 1)
                        }}
                    >
                        <Icons name="rightArrowIcon" size={1.3} color="white" />
                    </Flex>
                )}
            </Flex>
        </Flex>
    )
}
export default Paginate
