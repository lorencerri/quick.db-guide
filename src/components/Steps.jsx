import { useStore } from "../state";
import { Stepper } from "@mantine/core";

export const Steps = () => {
    const step = useStore((state) => state.step);
    const setStep = useStore((state) => state.setStep);

    return (
        <Stepper active={step} onStepClick={setStep} orientation="vertical">
            <Stepper.Step label="Introduction" />
            <Stepper.Step label="Step 2" />
            <Stepper.Step label="Step 3" />
            <Stepper.Step label="Step 4" />
            <Stepper.Step label="Step 5" />
            <Stepper.Step label="Step 6" />
            <Stepper.Step label="Step 7" />
            <Stepper.Step label="Step 8" />
            <Stepper.Step label="Step 9" />
        </Stepper>
    );
};
