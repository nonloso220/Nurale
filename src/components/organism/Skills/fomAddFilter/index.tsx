import { FormProvider, useForm } from 'react-hook-form'
import { schema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Skill, fetchSkills } from '../../../../store/skills'
import InputForm from '../../../molecules/InputForm'
import { useAppDispatch } from '../../../../store'
import Filter from '../../../molecules/Filter'
interface Props {
    open: boolean
    take: number
    skip: number
    setOpen: (item: boolean) => void
}
const FormAddFilter = ({ open, take, skip, setOpen }: Props) => {
    const dispatch = useAppDispatch()
    const handleSave = async () => {
        const errors1 = await trigger()
        if (!errors1) {
            console.log(errors)
            return errors1
        }
        await dispatch(
            fetchSkills({
                skillType: getValues('skillType'),
                skip: skip,
                take: take,
            })
        )
    }
    const handleResetFilter = async () => {
        const errors1 = await trigger()
        if (!errors1) {
            console.log(errors)
            return errors1
        }
        await reset(defaultValues)
        await dispatch(
            fetchSkills({
                skip: skip,
                take: take,
            })
        )
    }
    const defaultValues = {
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
    return (
        <Filter
            handleSave={handleSave}
            handleResetFilter={handleResetFilter}
            open={open}
            setOpen={setOpen}
        >
            <FormProvider {...methods}>
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
                <div style={{ color: 'red' }}>{errors?.skillType?.message}</div>
            </FormProvider>
        </Filter>
    )
}
export default FormAddFilter
