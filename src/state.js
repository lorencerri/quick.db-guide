import create from 'zustand'

const useStore = create(set => ({
	step: 0,
	setStep: step => set(state => ({ ...state, step })),
	increment: () => set(state => ({ step: state.step + 1 })),
	decrement: () => set(state => ({ step: state.step - 1 })),
}))

export { useStore }