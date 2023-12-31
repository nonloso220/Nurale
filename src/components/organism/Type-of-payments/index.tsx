import { useState } from 'react'
import {
    TypeOfPayment,
    deleteTypeOfPayment,
    fetchTypeOfPayments,
    getPaginations,
    getTypeOfPayments,
} from '../../../store/typeOfPayments'
import TableLayout from '../TableLayout'
import FormTypeOfPayment from './form'
import { handleColumns } from './columns'
import { useSelector } from 'react-redux'
import { Flex } from '../..'
import Li from '../../atoms/Li'
import { theme } from '../../../theme'

const TypeOfPayments = () => {
    const totalElement = useSelector(getPaginations)
    const typeOfPayments = useSelector(getTypeOfPayments)
    const [typeOfPayment, setTypeOfPayment] = useState<TypeOfPayment | null>(
        null
    )
    const [open, setOpen] = useState<boolean>(false)
    const [skip, setSkip] = useState<number>(0)
    const [take, setTake] = useState<number>(0)
    const [elementFilter, setElementFilter] = useState<boolean | string>()
    const formObject = (Object: any) => {
        setTypeOfPayment(Object.object)
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
            labelNavbar="Tipi di pagamento"
            lablel="Aggiungi nuovo Tipo di Pagamento"
            totalElement={totalElement}
            objects={typeOfPayments}
            handleColumns={handleColumns}
            fetchElement={fetchTypeOfPayments}
            form={formObject}
            open={open}
            setOpen={setOpen}
            deleteFunction={deleteTypeOfPayment}
            setElementFilter={setElementFilter}
            elementFilter={elementFilter}
            childrenFilter={
                <>
                    <Flex bgcolor="white">
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
                    </Flex>
                </>
            }
            children={
                <FormTypeOfPayment
                    open={open}
                    take={take}
                    skip={skip}
                    form={formObject}
                    TypeOfPayment={typeOfPayment}
                    setOpen={setOpen}
                />
            }
            typePage={'typeOfPayment'}
        />
    )
    // const dispatch = useAppDispatch()
    // const [open, setOpen] = useState(false)
    // const [openDelete, setOpenDelete] = useState(false)
    // const [openEdit, setOpenEdit] = useState(false)
    // const [skip, setSkip] = useState(0)
    // const [typeOfPayment, setTypeOfPayment] = useState<TypeOfPayment | null>(
    //     null
    // )
    // const typeOfPayments = useSelector(getTypeOfPayments)
    // const totalElement = useSelector(getPaginations)
    // const [elementFilter, setElementFilter] = useState<boolean>()
    // const [currentPage, setCurrentPage] = useState<number>(1)
    // const [filter, setFilter] = useState(false)
    // const [coloredButton, setColoredButton] = useState(false)
    // const [coloredButton2, setColoredButton2] = useState(false)
    // const take = 10
    // useEffect(() => {
    //     dispatch(
    //         fetchTypeOfPayments({
    //             skip: skip,
    //             take: take,
    //         })
    //     )
    // }, [])
    // const handleClick = () => {
    //     setOpen(!open)
    // }
    // const handleClickFilter = () => {
    //     setFilter(!filter)
    // }
    // const handleFormEditSkill = (object: TypeOfPayment) => {
    //     setOpenEdit(true)
    //     setTypeOfPayment(object)
    // }
    // const handleConfirmDelete = (object: TypeOfPayment) => {
    //     setOpenDelete(true)
    //     setTypeOfPayment(object)
    // }

    // const handleCloseDelete = async () => {
    //     setOpenDelete(false)
    //     await dispatch(
    //         fetchTypeOfPayments({
    //             skip: skip,
    //             take: take,
    //         })
    //     )
    // }
    // const handleDelete = async () => {
    //     await dispatch(deleteTypeOfPayment(typeOfPayment?.id))
    // }
    // useEffect(() => {
    //     dispatch(
    //         fetchTypeOfPayments({
    //             skip: skip,
    //             take: take,
    //         })
    //     )
    // }, [skip])
    // const handlePagination = (page: number) => {
    //     setSkip(page)
    // }
    // const handleFilter = (element: boolean) => {
    //     setColoredButton(element ? true : false)
    //     setColoredButton2(element ? false : true)
    //     setElementFilter(element)
    // }
    // const fetchTypeOfPaymentsFiltered = async () => {
    //     await dispatch(
    //         fetchTypeOfPayments({
    //             hasEndOfMonth: elementFilter,
    //             skip: skip,
    //             take: take,
    //         })
    //     )
    // }
    // const handleResetFilter = async () => {
    //     setColoredButton(false)
    //     setColoredButton2(false)
    //     setElementFilter(undefined)
    //     await dispatch(
    //         fetchTypeOfPayments({
    //             skip: skip,
    //             take: take,
    //         })
    //     )
    // }
    // return (
    //     <Flex
    //         column="column"
    //         bgcolor="white"
    //         width={100}
    //         widthType="%"
    //         height={100}
    //         style={{ overflow: 'auto' }}
    //     >
    //         <Navbar label="Tipi di pagamento" />
    //         <div
    //             style={{
    //                 paddingLeft: '30px',
    //                 paddingRight: '30px',
    //                 marginTop: open ? '17px' : '55px',
    //             }}
    //         >
    //             <Flex bgcolor="white">
    //                 <Flex bgcolor="white">
    //                     <Li
    //                         style={{
    //                             backgroundColor: theme.colors.pink100,
    //                             display: open ? 'none' : 'block',
    //                             border: '0px',
    //                             padding: '10px',
    //                             width: '167px',
    //                             color: 'white',
    //                         }}
    //                         onClick={handleClick}
    //                     >
    //                         <AddIcon />
    //                         <span>&nbsp; aggiungi nuovo</span>
    //                     </Li>
    //                 </Flex>
    //                 <Flex bgcolor="white" style={{ marginLeft: 'auto' }}>
    //                     <Li
    //                         style={{
    //                             backgroundColor: theme.colors.pink100,
    //                             display: open ? 'none' : 'block',
    //                             border: '0px',
    //                             padding: '10px',
    //                             width: '191px',
    //                             color: 'white',
    //                             marginRight: '0',
    //                         }}
    //                         onClick={handleClickFilter}
    //                     >
    //                         <span style={{ paddingLeft: '33%' }}>
    //                             &nbsp; Filtri
    //                         </span>
    //                     </Li>
    //                 </Flex>
    //             </Flex>

    //             <Text
    //                 style={{
    //                     color: theme.colors.pink100,
    //                     fontFamily: 'Lato',
    //                 }}
    //                 fontSize="3xl"
    //                 display={open ? 'block' : 'none'}
    //             >
    //                 Aggiungi nuovo Tipo di Pagamento
    //             </Text>
    //             <br />

    //             {open ? (
    //                 <FormTypeOfPayment
    //                     open={open}
    //                     take={take}
    //                     skip={skip}
    //                     setOpen={setOpen}
    //                 />
    //             ) : openEdit ? (
    //                 <FormTypeOfPayment
    //                     open={openEdit}
    //                     take={take}
    //                     skip={skip}
    //                     TypeOfPayment={typeOfPayment}
    //                     setOpen={setOpenEdit}
    //                 />
    //             ) : (
    //                 <Flex bgcolor="white" column="column">
    //                     <Flex bgcolor="white">
    //                         <Table
    //                             columns={handleColumns()}
    //                             data={typeOfPayments}
    //                             handleEdit={handleFormEditSkill}
    //                             handleDelete={handleConfirmDelete}
    //                         ></Table>
    //                         {filter ? (
    //                             <Filter
    //                                 handleSave={fetchTypeOfPaymentsFiltered}
    //                                 handleResetFilter={handleResetFilter}
    //                                 open={filter}
    //                                 setOpen={setFilter}
    //                             >
    //                                 <Flex bgcolor="white">
    //                                     <span>
    //                                         Pagamenti alla fine del mese
    //                                     </span>
    //                                 </Flex>
    //                                 <Flex bgcolor="white">
    //                                     <Li
    //                                         style={{
    //                                             backgroundColor:
    //                                                 theme.colors.pink100,
    //                                             display: open
    //                                                 ? 'none'
    //                                                 : 'block',
    //                                             border: '0px',
    //                                             padding: '10px',
    //                                             width: '65px',
    //                                             color: 'white',
    //                                             textAlign: 'center',
    //                                         }}
    //                                         onClick={handleResetFilter}
    //                                     >
    //                                         Tutti
    //                                     </Li>
    //                                     <Li
    //                                         style={{
    //                                             backgroundColor: coloredButton
    //                                                 ? theme.colors.purple
    //                                                 : theme.colors.pink100,
    //                                             display: open
    //                                                 ? 'none'
    //                                                 : 'block',
    //                                             border: '0px',
    //                                             padding: '10px',
    //                                             width: '65px',
    //                                             color: 'white',
    //                                             textAlign: 'center',
    //                                         }}
    //                                         onClick={() => handleFilter(true)}
    //                                     >
    //                                         Si
    //                                     </Li>
    //                                     <Li
    //                                         style={{
    //                                             backgroundColor: coloredButton2
    //                                                 ? theme.colors.purple
    //                                                 : theme.colors.pink100,
    //                                             display: open
    //                                                 ? 'none'
    //                                                 : 'block',
    //                                             border: '0px',
    //                                             padding: '10px',
    //                                             width: '65px',
    //                                             color: 'white',
    //                                             textAlign: 'center',
    //                                         }}
    //                                         onClick={() => {
    //                                             handleFilter(false)
    //                                         }}
    //                                     >
    //                                         No
    //                                     </Li>
    //                                 </Flex>
    //                             </Filter>
    //                         ) : null}
    //                     </Flex>
    //                     <Paginate
    //                         handlePagination={handlePagination}
    //                         skip={skip}
    //                         take={take}
    //                         totalElement={totalElement}
    //                         currentPage={currentPage}
    //                         setCurrentPage={setCurrentPage}
    //                     />
    //                 </Flex>
    //             )}
    //             <ModalConfirm
    //                 open={openDelete}
    //                 objectName={String(typeOfPayment?.name)}
    //                 handleClose={handleCloseDelete}
    //                 handleDelete={handleDelete}
    //             ></ModalConfirm>
    //         </div>
    //     </Flex>
    // )
}
export default TypeOfPayments
