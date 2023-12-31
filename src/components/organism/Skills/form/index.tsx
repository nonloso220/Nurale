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
import { Skill, createSkill, updateSkill } from '../../../../store/skills'
import { useEffect } from 'react'

interface Props {
    open: boolean
    skill?: Skill | null
    take: number
    skip: number
    setOpen: (item: boolean) => void
}
const FormSkill = ({ open, skill, skip, take, setOpen }: Props) => {
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
        setValue,
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
            id:skill?.id
        }
        if(skill){
            await dispatch(updateSkill(newSkill))
        }
        else{
            await dispatch(createSkill(newSkill))
        }
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
        console.log(open)
    }
    useEffect(() => {
        if (skill) {
            setValue('name', skill.name)
            setValue('note', skill.note)
            setValue('skillType', skill.skillType)
        } else null
    }, [open])

    return (
        <Modal show={open} color="black">
            <Flex
                bgcolor="white"
                border="1px solid #857DAC"
                style={{
                    borderRadius: '10px',
                    width: '100%',
                    padding: '16px',
                }}
                column="column"
            >
                <Flex bgcolor="white">
                    <Flex
                        bgcolor="white"
                        column="column"
                        style={{ width: '100%' }}
                    >
                        <FormProvider {...methods}>
                            <Stack spacing={3}>
                                <InputForm
                                    fontSize="16px"
                                    label="Nome"
                                    placeholder="Nome"
                                    fontWeight="500"
                                    name={'name'}
                                    action={'input'}
                                    type="text"
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.name?.message}
                                </div>
                            </Stack>
                        </FormProvider>
                    </Flex>
                    <Flex
                        bgcolor="white"
                        column="column"
                        style={{
                            marginLeft: '20px',
                            width: '100%',
                        }}
                    >
                        <FormProvider {...methods}>
                            <Stack spacing={3}>
                                <InputForm
                                    fontSize="16px"
                                    label="Tipo di skill"
                                    fontWeight="500"
                                    name={'skillType'}
                                    action={'select'}
                                    type="text"
                                    placeholder={''}
                                    defaultElement={skill?getValues('skillType'):' '}
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
                <Flex bgcolor="white" style={{ width: '100%' }}>
                    <FormProvider {...methods}>
                        <Stack
                            spacing={3}
                            style={{
                                width: '100%',
                            }}
                        >
                            <InputForm
                                fontSize="16px"
                                label="Note"
                                placeholder="Note"
                                fontWeight="500"
                                name={'note'}
                                action={'textArea'}
                                type="text"
                                style={{
                                    width: '100%',
                                    borderRadius: '11px',
                                    borderColor: '#857DAC',
                                    display: 'flex',
                                }}
                            />

                            <div style={{ color: 'red' }}>
                                {errors?.name?.message}
                            </div>
                        </Stack>
                    </FormProvider>
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
                        onClick={handleClick}
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
export default FormSkill
