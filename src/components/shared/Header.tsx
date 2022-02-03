import React from 'react';
import styled from 'styled-components';
import { FaHandPointLeft } from 'react-icons/fa'
import { BiTimer } from 'react-icons/bi'
import { useCountdownTimer } from '../../hooks/useCountdownTimer';

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
    const { time } = useCountdownTimer()
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
