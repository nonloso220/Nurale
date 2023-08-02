import { useState } from 'react'
import TableLayout from '../TableLayout'
import { handleColumns } from './columns'
import { useSelector } from 'react-redux'
import { Flex } from '../..'
import Li from '../../atoms/Li'
import { theme } from '../../../theme'
import FormTypeOfPayment from '../Type-of-payments/form'
import { Resource, deleteResource, fetchResource } from '../../../store/resources'
import { getPaginations, getResources } from '../../../store/resources/resources/selectors'
import FormResource from './form'

const Resources = () => {
    const totalElement = useSelector(getPaginations)
    const resources = useSelector(getResources)
    const [resource, setResource] = useState<Resource | null>(null)
    const [open, setOpen] = useState<boolean>(false)
    const [skip, setSkip] = useState<number>(0)
    const [take, setTake] = useState<number>(0)
    const [elementFilter, setElementFilter] = useState<boolean | string>()
    const formObject = (Object: any) => {
        setResource(Object.object)
        setSkip(Object.params.skip)
        setTake(Object.params.take)
        setOpen(Object.open)
    }
    const handleFilter = (element: boolean) => {
        // setColoredButton(element ? true : false)
        // setColoredButton2(element ? false : true)
        setElementFilter(element)
    }
    const handleResetFilter = async () => {
        setElementFilter(undefined)
    }
    return (
        <TableLayout
            labelNavbar="Risorse"
            lablel="Aggiungi nuova risorsa"
            totalElement={totalElement}
            objects={resources}
            handleColumns={handleColumns}
            fetchElement={fetchResource}
            form={formObject}
            open={open}
            setOpen={setOpen}
            deleteFunction={deleteResource}
            setElementFilter={setElementFilter}
            elementFilter={elementFilter}
            childrenFilter={
                <>
                    {/* <Flex bgcolor="white">
                        <span>Pagamenti alla fine del mese</span>
                    </Flex>
                    <Flex bgcolor="white">
                        <Li
                            style={{
                                backgroundColor: theme.colors.pink100,
                                display: open ? 'none' : 'block',
                                border: '0px',
                                padding: '10px',
                                width: '65px',
                                color: 'white',
                                textAlign: 'center',
                            }}
                            onClick={handleResetFilter}
                        >
                            Tutti
                        </Li>
                        <Li
                            //  coloredButton
                            //  ? theme.colors.purple
                            style={{
                                backgroundColor: theme.colors.pink100,
                                display: open ? 'none' : 'block',
                                border: '0px',
                                padding: '10px',
                                width: '65px',
                                color: 'white',
                                textAlign: 'center',
                            }}
                            onClick={() => handleFilter(true)}
                        >
                            Si
                        </Li>
                        <Li
                            // coloredButton2
                            // ? theme.colors.purple
                            // :
                            style={{
                                backgroundColor: theme.colors.pink100,
                                display: open ? 'none' : 'block',
                                border: '0px',
                                padding: '10px',
                                width: '65px',
                                color: 'white',
                                textAlign: 'center',
                            }}
                            onClick={() => {
                                handleFilter(false)
                            }}
                        >
                            No
                        </Li>
                    </Flex> */}
                </>
            }
            children={
                <FormResource
                    open={open}
                    take={take}
                    skip={skip}
                    form={formObject}
                    resource={resource}
                    setOpen={setOpen}
                />
            }
            typePage={'resource'}
        />
    )
}
export default Resources
