import create from 'zustand'

const useStore = create(set => ({
	steps: [
		{ label: "Introduction", path: "" },
		{ label: "Installation", path: "installation" },
		{ label: "Migration Guide", path: "migration" },
		{ label: "Basic Usage", path: "basic-usage" },
		{ label: "Tables", path: "tables" },
		{ label: "Using with Discord.js", path: "using-with-discordjs" },
		{ label: "Demo App", path: "demo-app" },
		{ label: "API Docs", path: "api" },
	],

	step: 0,
	opened: false,
	setOpened: opened => set(state => ({ ...state, opened })),
	setStep: step => set(state => ({ ...state, step })),
	increment: () => set(state => ({ step: state.step + 1 })),
	decrement: () => set(state => ({ step: state.step - 1 })),
}))

export { useStore }