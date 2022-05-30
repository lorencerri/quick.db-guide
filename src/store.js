import create from 'zustand'

const useStore = create(set => ({
	steps: ["Introduction", "Installation", "Basic Usage", "Tables", "Using with Discord.js", "Demo App"],
	step: 0,
	opened: false,
	setOpened: opened => set(state => ({ ...state, opened })),
	setStep: step => set(state => ({ ...state, step })),
	increment: () => set(state => ({ step: state.step + 1 })),
	decrement: () => set(state => ({ step: state.step - 1 })),
}))

export { useStore }