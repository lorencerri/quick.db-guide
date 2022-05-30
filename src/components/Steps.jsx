import { useStore } from "../store";
import { Stepper } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const Steps = () => {
    const navigate = useNavigate();
    const step = useStore((state) => state.step);
    const setStep = useStore((state) => state.setStep);
    const steps = useStore((state) => state.steps);

    return (
        <Stepper
            active={step}
            onStepClick={(index) => {
                setStep(index);
                navigate(steps[index].path);
            }}
            orientation="vertical"
        >
            {steps.map((step, index) => {
                return <Stepper.Step key={index} label={step.label} />;
            })}
        </Stepper>
    );
};
