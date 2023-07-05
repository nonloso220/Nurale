import { Flex } from '../..'
import Navbar from '../../molecules/Navbar'

const Home = () => {
    return (
        <Flex
            column="column"
            bgcolor="white"
            width={100}
            widthType="%"
            height={100}
        >
            <Navbar />
        </Flex>
    )
}
export default Home
