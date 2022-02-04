import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTimerContext } from '../../context/TimerContext';
import { Button, Form, Wrapper } from './Styles.Content'
const Content = () => {

    const { onClickReset } = useTimerContext()

    return (
        <>
            <Wrapper>
                <Form>
                    <header className="text-1xs font-bold">Coding Quiz Challenge</header>
                    <p className='text-gray-700'>Try to answer to following code-related questions within the limit.</p>
                    <p className='text-gray-700'>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
                    <NavLink to='/quiz'>
                    <Button onClick={onClickReset}>Start</Button>
                    </NavLink>
                </Form>
            </Wrapper>
        </>

    );
};

export default Content;
