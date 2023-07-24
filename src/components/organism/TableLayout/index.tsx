import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store'
import { Skill } from '../../../store/skills/skill/types'
import { User } from '../../../store/users/user/types'
import { Flex, Table } from '../..'
import Navbar from '../../molecules/Navbar'
import Li from '../../atoms/Li'
import { AddIcon } from '@chakra-ui/icons'
import { theme } from '../../../theme'
import Filter from '../../molecules/Filter'
import Paginate from '../Pagination'
import ModalConfirm from '../../molecules/ModalConfirm'
import { Text } from '@chakra-ui/react'
import { QueryParams } from '../../../utils/models'
import { TypeOfPayment } from '../../../store/typeOfPayments'

interface Props {
    totalElement: number //getPaginations  useSelector(getPaginations)
    objects: TypeOfPayment[] | User[] | Skill[] //getobject  useSelector(getTypeOfPayments)
    handleColumns: () => void
    fetch: ({}) => void

    form: (item: any) => void
    children: React.ReactNode
    childrenFilter: React.ReactNode
    open: boolean
    setOpen: (item: boolean) => void
    deleteFunction: (item: any) => void
}
const TableLayout = ({
    totalElement,
    objects,
    handleColumns,
    fetch,
    form,
    children,
    childrenFilter,
    open = false,
    setOpen,
    deleteFunction,
}: Props) => {
    const dispatch = useAppDispatch()
    const [openDelete, setOpenDelete] = useState(false)
    const [skip, setSkip] = useState(0)
    const [object, setObject] = useState<TypeOfPayment | User | Skill | null>(
        null
    )
    const [elementFilter, setElementFilter] = useState<boolean | string>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [filter, setFilter] = useState(false)
    // const [coloredButton, setColoredButton] = useState(false)
    // const [coloredButton2, setColoredButton2] = useState(false)
    let take = 10
    const params: QueryParams = {
        skip: skip,
        take: take,
    }
    useEffect(() => {
        dispatch(
            fetch({
                skip: skip,
                take: take,
            })
        )
    }, [])
    const handleClick = () => {
        setOpen(!open)
    }
    const handleClickFilter = () => {
        setFilter(!filter)
    }
    const handleFormEdit = (object: TypeOfPayment | User | Skill) => {
        setOpen(true)
        setObject(object)
    }
    const handleConfirmDelete = (object: TypeOfPayment | User | Skill) => {
        setOpenDelete(true)
        setObject(object)
    }
    const handleFilter = (element: boolean) => {
        // setColoredButton(element ? true : false)
        // setColoredButton2(element ? false : true)
        setElementFilter(element)
    }
    const handleCloseDelete = async () => {
        setOpenDelete(false)
        await dispatch(
            fetch({
                skip: skip,
                take: take,
            })
        )
    }
    const handleDelete = async () => {
        await dispatch(deleteFunction(object?.id))
    }
    useEffect(() => {
        dispatch(
            fetch({
                skip: skip,
                take: take,
            })
        )
    }, [skip])
    const handlePagination = (page: number) => {
        setSkip(page)
    }

    const fetchFiltered = async () => {
        await dispatch(
            isUser(object)
                ? null
                : isSkill(object)
                ? ((params.skillType = String(elementFilter)),
                  fetch({
                      skip: skip,
                      take: take,
                  }))
                : isTypeOfPayments(object)
                ? ((params.hasEndOfMonth = Boolean(elementFilter)),
                  fetch({
                      skip: skip,
                      take: take,
                  }))
                : null
        )
    }
    const handleResetFilter = async () => {
        setElementFilter(undefined)
        await dispatch(
            fetch({
                skip: skip,
                take: take,
            })
        )
    }
    function isUser(object: any): object is User {
        return object
    }
    function isSkill(object: any): object is Skill {
        return object
    }
    function isTypeOfPayments(object: any): object is TypeOfPayment {
        return object
    }
    const objectForm: any = {
        object,
        open,
        setOpen,
        params,
    }
    return (
        <Flex
            column="column"
            bgcolor="white"
            width={100}
            widthType="%"
            height={100}
            style={{ overflow: 'auto' }}
        >
            <Navbar label="Tipi di pagamento" />
            <div
                style={{
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    marginTop: open ? '17px' : '55px',
                }}
            >
                <Flex bgcolor="white">
                    <Flex bgcolor="white">
                        <Li
                            style={{
                                backgroundColor: theme.colors.pink100,
                                display: open ? 'none' : 'block',
                                border: '0px',
                                padding: '10px',
                                width: '167px',
                                color: 'white',
                            }}
                            onClick={handleClick}
                        >
                            <AddIcon />
                            <span>&nbsp; aggiungi nuovo</span>
                        </Li>
                    </Flex>
                    <Flex bgcolor="white" style={{ marginLeft: 'auto' }}>
                        <Li
                            style={{
                                backgroundColor: theme.colors.pink100,
                                display: open ? 'none' : 'block',
                                border: '0px',
                                padding: '10px',
                                width: '191px',
                                color: 'white',
                                marginRight: '0',
                            }}
                            onClick={handleClickFilter}
                        >
                            <span style={{ paddingLeft: '33%' }}>
                                &nbsp; Filtri
                            </span>
                        </Li>
                    </Flex>
                </Flex>
                <Text
                    style={{
                        color: theme.colors.pink100,
                        fontFamily: 'Lato',
                    }}
                    fontSize="3xl"
                    display={open ? 'block' : 'none'}
                >
                    Aggiungi nuovo Tipo di Pagamento
                </Text>
                <br />
                {open ? (
                    (form(objectForm), children)
                ) : (
                    <Flex bgcolor="white" column="column">
                        <Flex bgcolor="white">
                            <Table
                                columns={handleColumns()}
                                data={objects}
                                handleEdit={handleFormEdit}
                                handleDelete={handleConfirmDelete}
                            ></Table>
                            {filter ? (
                                <Filter
                                    handleSave={fetchFiltered}
                                    handleResetFilter={handleResetFilter}
                                    open={filter}
                                    setOpen={setFilter}
                                >
                                    {childrenFilter}
                                    {/* <Flex bgcolor="white">
                            <span>
                                Pagamenti alla fine del mese
                            </span>
                        </Flex>
                        <Flex bgcolor="white">
                            <Li
                                style={{
                                    backgroundColor:
                                        theme.colors.pink100,
                                    display: open
                                        ? 'none'
                                        : 'block',
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
                                style={{
                                    backgroundColor: coloredButton
                                        ? theme.colors.purple
                                        : theme.colors.pink100,
                                    display: open
                                        ? 'none'
                                        : 'block',
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
                                style={{
                                    backgroundColor: coloredButton2
                                        ? theme.colors.purple
                                        : theme.colors.pink100,
                                    display: open
                                        ? 'none'
                                        : 'block',
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
                                </Filter>
                            ) : null}
                        </Flex>
                        <Paginate
                            handlePagination={handlePagination}
                            skip={skip}
                            take={take}
                            totalElement={totalElement}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </Flex>
                )}
                <ModalConfirm
                    open={openDelete}
                    objectName={String(
                        isUser(object) ? object.email : object?.name
                    )}
                    handleClose={handleCloseDelete}
                    handleDelete={handleDelete}
                ></ModalConfirm>
            </div>
        </Flex>
    )
}
export default TableLayout
