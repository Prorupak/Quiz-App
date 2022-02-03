import React from "react";

export const useCountdownTimer = () => {
    const intervalRef: React.MutableRefObject<any> = React.useRef(null);
    const [time, setTime] = React.useState<string>('10');

    const timeRemaining = (endTime: string) => {
        const total = Date.parse(endTime) - Date.parse(new Date().toISOString());
        const seconds = Math.floor((total / 1000) % 60);
        return {
            total,
            seconds
        }
    }

    const startTimer = (deadLine: string) => {
        let { total, seconds } = timeRemaining(deadLine);

        if (total >= 0) {
            setTime(`${seconds}`);
        } else {
            clearInterval(intervalRef.current);
        }
    }

    const clearTimer = (endTime: string) => {
        setTime('10');
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        };
        const id = setInterval(() => {
            startTimer(endTime);
        }, 1000)
        intervalRef.current = id
    }

    const getDeadline = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }

    const onClickReset = () => {
        console.log("click reset");
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        clearTimer(getDeadline().toISOString());
    }

    React.useEffect(() => {
        clearTimer(getDeadline().toISOString());
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
    }, [])

    return {
        time,
        setTime,
        onClickReset
    }
}