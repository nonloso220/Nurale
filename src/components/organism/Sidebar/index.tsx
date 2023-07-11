import { Flex } from '../../atoms'
import LogoImage from '../../molecules/LogoImage'
import { Divider, Stack, Switch } from '@chakra-ui/react'
import './sidebar.css'
import TextSidebar from '../TextSidebar'
import TextElement from '../../molecules/TextElement'
import { ROUTES, SIDEBAR } from '../../../utils/costants'
import { useState } from 'react'
import { removeTokenCookies } from '../../../utils/auth/authCookies'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate()
    const [sidebarArrow, setSidebarArrow] = useState(false)
    const handleClick = (event: boolean) => {
        event ? setSidebarArrow(!sidebarArrow) : setSidebarArrow(false)
    }
    const handleLogout = () => {
        removeTokenCookies()
        navigate(ROUTES.Login)
    }
    return (
        <Flex
            bgcolor="white"
            column="column"
            style={{
                boxShadow: '0px 1px 8px rgba(81, 70, 137, 0.5)',
                borderRadius: '0px 0px 20px 0px',
                zIndex: '10',
                paddingLeft: sidebarArrow ? '0px' : '22px',
                paddingTop: sidebarArrow ? '0px' : '22px',
            }}
            width={sidebarArrow ? 50 : 250}
            height={100}
            widthType="px"
        >
            {sidebarArrow ? (
                <div style={{ padding: '7px', paddingTop: '25px' }}>
                    <img src="image\logo-rimpicciolito.svg" />
                    <Divider
                        style={{
                            border: '1.5px solid',
                            width: sidebarArrow ? `${32}px` : `${189}px`,
                            color: '#514689',
                            marginTop: `${20}px`,
                            marginLeft: sidebarArrow ? '1px' : '0px',
                        }}
                    />
                </div>
            ) : (
                <LogoImage width={90} widthDivider={189} hightDivider={63} />
            )}

            <Flex
                style={{
                    position: 'absolute',
                    left: '15rem',
                    top: '5.25rem',
                    cursor: 'pointer',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'white',
                        zIndex: '100',
                    }}
                    onClick={() => handleClick(true)}
                >
                    {sidebarArrow ? (
                        <TextElement
                            nameIcon={'sidebarReverseIcon'}
                            sidebarArrow={true}
                            left="-200px"
                            top="0rem"
                            display="block"
                            position="absolute"
                        />
                    ) : (
                        <TextElement
                            nameIcon={'sidebarIcon'}
                            sidebarArrow={true}
                            left="-25px"
                            top="-11px"
                            display="block"
                            position="absolute"
                        />
                    )}
                </div>
            </Flex>
            <br />
            <Flex
                bgcolor="white"
                column="column"
                style={{
                    marginTop: sidebarArrow ? '25px' : '3.3rem',
                    overflow: 'hidden auto',
                    position: 'sticky',
                    paddingLeft: sidebarArrow ? '11px' : '0px',
                }}
            >
                {SIDEBAR.map((sidebar) => (
                    <div onClick={() => handleClick(false)} key={sidebar.href}>
                        <TextSidebar
                            label={sidebarArrow ? '' : sidebar.name}
                            dropdownVerification={sidebar.sublinkVerification}
                            nameIcon={sidebar.icon}
                            nameOtherIcon={
                                sidebarArrow ? undefined : sidebar.nameotherIcon
                            }
                            sidebarArrow={sidebarArrow}
                        />
                    </div>
                ))}
            </Flex>
            <br />
            <div style={{marginTop: 'auto',marginBottom: '15%',}}>
                <Divider
                    style={{
                        position: 'absolute',
                        border: '1.5px solid',
                        width: sidebarArrow ? `${32}px` : `${189}px`,
                        color: '#514689',
                        // marginTop: `${530}px`,
                        marginLeft: sidebarArrow ? '7px' : '0px',
                    }}
                />
                <br />
                <Flex
                    bgcolor="white"
                    column="column"
                    style={{
                        marginTop: sidebarArrow ? '3px' : '-42px',
                        paddingLeft: sidebarArrow ? '11px' : '0px',
                        fontFamily: 'Lato',
                    }}
                >
                    <div
                        onClick={() => handleClick(false)}
                        style={{ paddingBottom: '22px', cursor: 'pointer' }}
                    >
                        <div onClick={handleLogout}>
                            <TextElement
                                label={sidebarArrow ? '' : 'Logout'}
                                nameIcon={'logoutIcon'}
                                sidebarArrow={sidebarArrow}
                                paddingBottom="11px"
                                marginTop="30px"
                            />
                        </div>

                        <Flex bgcolor="white">
                            <TextElement
                                label={sidebarArrow ? '' : 'Darkmode'}
                                nameIcon={'darkmodeIcon'}
                                sidebarArrow={sidebarArrow}
                            />
                            {sidebarArrow ? null : (
                                <Stack
                                    align="center"
                                    direction="row"
                                    style={{ paddingRight: '22px' }}
                                >
                                    <Switch size="md" />
                                </Stack>
                            )}
                        </Flex>
                    </div>
                </Flex>
            </div>
        </Flex>
    )
}

export default Sidebar
