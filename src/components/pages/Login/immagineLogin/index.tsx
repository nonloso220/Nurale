import { Flex } from '../../../atoms'

const ImmagineLogin = () => {
    return (
        <Flex
            bgcolor="linear-gradient(299.92deg, #514689 18.26%, #EF426F 117.31%)"
            width={70}
            height={100}
            style={{
                left: '548px',
                top: '-2px',
                placeContent: 'center',
                margin: 'auto',
            }}
        >
            <div style={{ width: '34', height: '34' }}>
                <img
                    src="image\logo-form.svg"
                    style={{
                        top: '25%',
                        position: 'relative',
                        width: '85%',
                    }}
                />
            </div>
        </Flex>
    )
}
export default ImmagineLogin
