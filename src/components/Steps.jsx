import { useStore } from "../store";
import { Stepper } from "@mantine/core";

export const Steps = () => {
    const step = useStore((state) => state.step);
    const setStep = useStore((state) => state.setStep);
    const steps = useStore((state) => state.steps);

    return (
        <Stepper active={step} onStepClick={setStep} orientation="vertical">
            {steps.map((step, index) => {
                return <Stepper.Step key={index} label={step} />;
            })}
        </Stepper>
    );
};
