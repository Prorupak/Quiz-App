import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
min-height: 40%;
min-width: 40%;
box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
border: 1px solid #e6e6e6;
border-radius: 10px;
;
`;

const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
padding: 30px 20px 20px 20px;
`
const Button = styled.button.attrs({
    type: 'submit',
    className: 'bg-nav text-white font-bold py-2 px-4 rounded'
})`
width: 75px;
margin: 15px 0;
&:hover {
    filter: brightness(0.9);
}
`
const Content = () => {
    return (
        <>
            <Wrapper>
                <ContentWrapper>
                    <header className="text-1xs font-bold">Coding Quiz Challenge</header>
                    <p className='text-gray-700'>Try to answer to following code-related questions within the limit.</p>
                    <p className='text-gray-700'>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
                    <Button>Start</Button>
                </ContentWrapper>
            </Wrapper>
        </>

    );
};

export default Content;
