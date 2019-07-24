import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
`;

export const Input = styled.input`
    max-width: 100%;
    width: 30rem;
    display: block;
    padding: .5rem 2rem;
    font-size: 2rem;
    margin: 2rem 0;
    
    border: 3px solid darkgrey;
    border-radius: .5rem;

    &:focus {
        outline: none;
    }
`;

export const SubmitBtn = styled.input`
    padding: .8rem 3rem;
    font-size: 2rem;
    

    background: white;
    border: 2px solid darkgrey;
    color: #666;
    cursor: pointer;

    transform: translateY(0rem);
    box-shadow: 0 0rem 0 -1.3rem #333;

    transition: transform .3s ease-in-out, box-shadow .3s ease-in-out;

    &:hover {
        box-shadow: 0 1rem 5rem -1.3rem #333;
        transform: translateY(-.3rem);
    }
`;