import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../../store/applicationStore'
import { fetchSkills } from '../../../../store/skills/skills'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../validation'
import Flex from '../../../atoms/Flex'
import { Stack } from '@chakra-ui/react'
import Li from '../../../atoms/Li'
import { theme } from '../../../../theme'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import Modal from '../../../atoms/Modal'
import InputForm from '../../../molecules/InputForm'
import { Skill, createSkill } from '../../../../store/skills'

interface Props {
    open: boolean
    take: number
    skip: number
    setOpen: (item: boolean) => void
}
const FormAddFilter = ({ open, take, skip, setOpen }: Props) => {
    const dispatch = useAppDispatch()
    const defaultValues = {
        name: '',
        note: '',
        skillType: '',
    }
    const methods = useForm<Skill>({
        defaultValues,
        resolver: zodResolver(schema),
    })
    const {
        formState: { errors },
        trigger,
        getValues,
        reset,
    } = methods
    const handleSave = async () => {
        const errors1 = await trigger()
        if (!errors1) {
            console.log(errors)
            return errors1
        }
        const newSkill = {
            name: getValues('name'),
            note: getValues('note'),
            skillType: getValues('skillType'),
        }

        await dispatch(createSkill(newSkill))
        await reset(defaultValues)
        await setOpen(false)
        await dispatch(
            fetchSkills({
                search: '',
                skip: skip,
                take: take,
            })
        )
    }
    const handleClick = () => {
        setOpen(!open)
        open ? null : reset(defaultValues)
    }
    //285+487+27a   340 700
    return (
        <Modal
            show={open}
            color="black"
            style={{ position: 'absolute', right: '2.5%' }}
        >
            <Flex
                bgcolor="white"
                border="1px solid #857DAC"
                style={{
                    borderRadius: '10px',
                    width: '340px',
                    height: '480px',
                    padding: '16px',
                }}
                column="column"
            >
                <Flex bgcolor="white" column="column">
                    <Flex bgcolor="white">
                        <p
                            style={{
                                fontWeight: '550',
                                fontFamily: 'Lato',
                                fontSize: '25px',
                            }}
                        >
                            Filtri
                        </p>
                        <CloseIcon
                            onClick={handleClick}
                            style={{
                                height: 'auto',
                                marginLeft: 'auto',
                                cursor: 'pointer',
                            }}
                        />
                    </Flex>
                    <br />
                    <br />
                    <Flex bgcolor="white" column="column">
                        <FormProvider {...methods}>
                            <Stack spacing={3}>
                                <InputForm
                                    fontSize="16px"
                                    label="Tipo di skill"
                                    placeholder="Tipo di skill"
                                    fontWeight="550"
                                    name={'skillType'}
                                    action={'select'}
                                    type="text"
                                    defaultElement={'  '}
                                    selectElements={[
                                        'Frontend',
                                        'Backend',
                                        'Designer',
                                        'Administrator',
                                        'Other',
                                    ]}
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.skillType?.message}
                                </div>
                            </Stack>
                        </FormProvider>
                    </Flex>
                </Flex>
                <Flex
                    bgcolor="white"
                    style={{
                        justifyContent: 'flex-end',
                        marginTop: '13%',
                        marginBottom: '2%',
                    }}
                >
                    <Li
                        style={{
                            backgroundColor: theme.colors.gray20,
                            color: theme.colors.purple,
                            border: '0px',
                            padding: '10px',
                            width: '134px',
                            textAlign: 'center',
                        }}
                        marginRight="1rem"
                    >
                        <CloseIcon />
                        <span style={{ fontWeight: 'bold' }}>
                            &nbsp; Annulla
                        </span>
                    </Li>
                    <Li
                        style={{
                            backgroundColor: theme.colors.pink100,
                            color: 'white',
                            border: '0px',
                            padding: '10px',
                            width: '156px',
                            textAlign: 'center',
                        }}
                        onClick={handleSave}
                        marginRight="1rem"
                    >
                        <CheckIcon />
                        <span style={{ fontWeight: 'bold' }}>
                            &nbsp; Conferma
                        </span>
                    </Li>
                </Flex>
            </Flex>
        </Modal>
    )
}
export default FormAddFilter
