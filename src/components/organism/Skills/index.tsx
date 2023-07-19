import { createColumnHelper } from '@tanstack/react-table'
import { Flex, Table } from '../..'
import Navbar from '../../molecules/Navbar'
import { useSelector } from 'react-redux'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store/applicationStore'
import { AddIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import { theme } from '../../../theme'
import Li from '../../atoms/Li'
import { fetchSkills } from '../../../store/skills/skills'
import {
    getPaginations,
    getSkills,
} from '../../../store/skills/skills/selectors'
import Paginate from '../../organism/Pagination'
import { Skill, deleteSkill } from '../../../store/skills/skill'
import ModalConfirm from '../../molecules/ModalConfirm'
import FormSkill from './form'
import Filter from '../../molecules/Filter'
import SelectFilter from '../../atoms/SelectFilter'
import { handleColumns } from './columns'

const Skills = () => {
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [skip, setSkip] = useState(0)
    const [skill, setSkill] = useState<Skill | null>(null)
    const skills = useSelector(getSkills)
    const totalElement = useSelector(getPaginations)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [filter, setFilter] = useState(false)
    const [elementFilter, setElementFilter] = useState('')
    const [clear, setClear] = useState<boolean>(false)
    const take = 10
    useEffect(() => {
        dispatch(
            fetchSkills({
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
    const handleFormEditSkill = (object: Skill) => {
        setOpenEdit(true)
        setSkill(object)
    }
    const handleConfirmDelete = (object: Skill) => {
        setOpenDelete(true)
        setSkill(object)
    }

    const handleCloseDelete = async () => {
        setOpenDelete(false)
        await dispatch(
            fetchSkills({
                skip: skip,
                take: take,
            })
        )
    }
    const handleDelete = async () => {
        await dispatch(deleteSkill(skill?.id))
    }
    useEffect(() => {
        dispatch(
            fetchSkills({
                skip: skip,
                take: take,
            })
        )
    }, [skip])
    const handlePagination = (page: number) => {
        setSkip(page)
    }
    const handleChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
        setElementFilter(event.target.value)
    }
    const fetchSkillsFiltered = async () => {
        await dispatch(
            fetchSkills({
                skillType: elementFilter,
                skip: skip,
                take: take,
            })
        )
    }
    const handleResetFilter = async () => {
        setElementFilter('')
        setClear(true)
        await dispatch(
            fetchSkills({
                skip: skip,
                take: take,
            })
        )
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
            <Navbar label="Skills" />
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
                                display: open || openEdit ? 'none' : 'block',
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
                                display: open || openEdit ? 'none' : 'block',
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
                        color:theme.colors.pink100,
                        fontFamily: 'Lato',
                    }}
                    fontSize="3xl"
                    display={open ? 'block' : 'none'}
                >
                    Aggiungi nuova Skill
                </Text>
                <br />

                {open ? (
                    <FormSkill
                        open={open}
                        take={take}
                        skip={skip}
                        setOpen={setOpen}
                    />
                ) : openEdit ? (
                    <FormSkill
                        open={openEdit}
                        setOpen={setOpenEdit}
                        take={take}
                        skip={skip}
                        skill={skill}
                    />
                ) : (
                    <Flex bgcolor="white" column="column">
                        <Flex bgcolor="white">
                            <Table
                                columns={handleColumns()}
                                data={skills}
                                handleEdit={handleFormEditSkill}
                                handleDelete={handleConfirmDelete}
                            ></Table>
                            {filter ? (
                                <Filter
                                    handleSave={fetchSkillsFiltered}
                                    handleResetFilter={handleResetFilter}
                                    open={filter}
                                    setOpen={setFilter}
                                >
                                    <SelectFilter
                                        clear={clear}
                                        setClear={setClear}
                                        fontSize="16px"
                                        label="Tipo di skill"
                                        fontWeight="550"
                                        defaultElement={''}
                                        defaultValue=""
                                        selectElements={[
                                            '',
                                            'Frontend',
                                            'Backend',
                                            'Designer',
                                            'Administrator',
                                            'Other',
                                        ]}
                                        handleChangeFilter={handleChangeFilter}

                                        // style={{
                                        //     width: '100%',
                                        //     borderRadius: '11px',
                                        //     borderColor: '#857DAC',
                                        //     display: 'flex',
                                        // }}
                                    />
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
                    objectName={String(skill?.name)}
                    handleClose={handleCloseDelete}
                    handleDelete={handleDelete}
                ></ModalConfirm>
            </div>
        </Flex>
    )
}
export default Skills
