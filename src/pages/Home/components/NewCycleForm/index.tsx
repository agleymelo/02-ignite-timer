import { FormContainer, MinutesAMountInput, TaskInput } from './styles'

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">I Will work in</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Give your project a name"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Project 1" />
        <option value="Project 2" />
        <option value="Project 3" />
        <option value="Potato" />
      </datalist>

      <label htmlFor="minutesAmount">during</label>
      <MinutesAMountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={0}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
