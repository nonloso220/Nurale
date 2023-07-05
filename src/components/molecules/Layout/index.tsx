import { Outlet } from 'react-router-dom'
import Sidebar from '../../organism/Sidebar'
import { Flex } from '../../atoms'

const Layout = () => {
    return (
        <Flex bgcolor="white" height={100} style={{ boxSizing: 'border-box' }}>
            <Sidebar />
            <div className="ml-56 w-full" style={{ width: '100%' }}>
                <Outlet />
            </div>
        </Flex>
    )
}

export default Layout
