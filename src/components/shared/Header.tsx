import React from 'react';
import styled from 'styled-components';
import { FaHandPointLeft } from 'react-icons/fa'
import { BiTimer } from 'react-icons/bi'

const Wrapper = styled.div.attrs({
    className: 'h-50px px-3% bg-nav text-indigo-1000 text-center text-xl flex items-center justify-between'
})
    `
`

const HighScore = styled.div.attrs({
    className: 'flex items-center gap-5px text-white'
})`
    cursor: pointer;
    &:hover {
        color: #FF9F45;
        filter: brightness(0.9);
    }
`

const Time = styled.div.attrs({
    className: 'flex items-center text-white'
})``

// countdown timer which stops when time is up


const Header = () => {
    const intervalRef: React.MutableRefObject<any> = React.useRef(null);
    const [time, setTime] = React.useState<string>('00');

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








    return (
        <>
            <Wrapper>
                <HighScore>
                    <p>View Highscores</p>
                    <FaHandPointLeft />
                </HighScore>
                <Time>
                    <p className='flex items-center gap-5px'>
                        Time
                        <BiTimer size={25} />
                    </p>
                    <p>:</p>
                    {time}s
                </Time>
            </Wrapper>
        </>
    );
};

export default Header;
