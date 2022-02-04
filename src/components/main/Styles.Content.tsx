import styled from "styled-components";

export const Wrapper = styled.div`
min-height: min-content;
min-width: min-content;
box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
border: 1px solid #e6e6e6;
border-radius: 10px;
;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 8px;
padding: 30px 20px 20px 20px;
`
export const Button = styled.button.attrs({
    type: 'submit',
    className: 'bg-nav text-white font-bold py-2 px-4 rounded'
})`
width: 75px;
margin: 15px 0;
&:hover {
    filter: brightness(0.9);
}
`