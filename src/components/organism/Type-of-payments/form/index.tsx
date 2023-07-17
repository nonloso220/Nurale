import { FormProvider, useForm } from "react-hook-form"
import { useAppDispatch } from "../../../../store"
import { TypeOfPayment, fetchTypeOfPayments } from "../../../../store/typeOfPayments/typeOfPayments"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "../validation"
import { useEffect } from "react"
import { Flex, Modal } from "../../../atoms"
import { Stack, Switch } from "@chakra-ui/react"
import InputForm from "../../../molecules/InputForm"
import { theme } from "../../../../theme"
import Li from "../../../atoms/Li"
import { CheckIcon, CloseIcon } from "@chakra-ui/icons"
import TextElement from "../../../molecules/TextElement"

interface Props {
    open: boolean
    TypeOfPayment?: TypeOfPayment | null
    take: number
    skip: number
    setOpen: (item: boolean) => void
}
const FormTypeOfPayment = ({ open, TypeOfPayment, skip, take, setOpen }: Props) => {
    const dispatch = useAppDispatch()
    const defaultValues = {
        name: '',
        note: '',
    }
    const methods = useForm<TypeOfPayment>({
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
        const newTypeOfPayment = {
            // name: getValues('name'),
            // note: getValues('note'),
            // skillType: getValues('skillType'),
        }
        if(TypeOfPayment){
            // await dispatch(updateSkill(newTypeOfPayment))
        }
        else{
            // await dispatch(createSkill(newTypeOfPayment))
        }
        await reset(defaultValues)
        await setOpen(false)
        await dispatch(
            fetchTypeOfPayments({
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
        if (TypeOfPayment) {
            // setValue('name', skill.name)
            // setValue('note', skill.note)
            // setValue('skillType', skill.skillType)
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
                                    label="Giorni al primo pagamento"
                                    placeholder="Giorni al primo pagamento"
                                    fontWeight="500"
                                    name={'daysToFirstPayment'}
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
                                    {errors?.daysToFirstPayment?.message}
                                </div>
                                <InputForm
                                    fontSize="16px"
                                    label="Numero di pagamenti"
                                    placeholder="Numero di pagamenti"
                                    fontWeight="500"
                                    name={'numberOfPayments'}
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
                                    {errors?.numberOfPayments?.message}
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
                                    label="Giorni tra i pagamenti"
                                    fontWeight="500"
                                    name={'daysBetweenPayments'}
                                    action={'input'}
                                    type="text"
                                    placeholder={'Giorni tra i pagamenti'}
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.daysBetweenPayments?.message}
                                </div>
                                <InputForm
                                    fontSize="16px"
                                    label="Giorni scostamento pagamento"
                                    fontWeight="500"
                                    name={'daysOffsetPayments'}
                                    action={'input'}
                                    type="text"
                                    placeholder={'Giorni scostamento pagamento'}
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.daysOffsetPayments?.message}
                                </div>
                            </Stack>
                        </FormProvider>
                    </Flex>
                </Flex>
                <Flex
                    bgcolor="white"
                    column="column"
                    style={{ width: '100%' }}
                >
                    <FormProvider {...methods}>
                        <Stack spacing={3}>
                            <InputForm
                                fontSize="16px"
                                label="Note"
                                placeholder="Note"
                                fontWeight="500"
                                name={'note'}
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
                                {errors?.note?.message}
                            </div>
                        </Stack>
                    </FormProvider>
                </Flex>
                <Flex bgcolor="white" column="column" >
                    <TextElement
                        paddingIcon='0'
                        label={'Spostare i pagamenti alla fine del mese'}
                        paddingBottom='6px'
                    />
                    <Stack
                        align="center"
                        direction="row"
                        style={{ paddingRight: '22px' }}
                    >
                        <Switch size="md" />
                    </Stack>
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
export default FormTypeOfPayment
