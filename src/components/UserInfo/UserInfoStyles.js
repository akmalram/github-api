import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100rem;
    margin: 3rem auto;
    text-align: center;
    
`;

export const Msg = styled.h1`
    font-size: 3rem;
    text-align: center;
    font-weight: normal;
`;

export const Img = styled.img`
    width: 30rem;
    height: 30rem;
    display: block;
    margin: 0 auto;
`;

export const List = styled.ul`
    margin: 3rem 0;
    list-style: none;
    text-align: left;
`;

const Item = styled.li`
    box-sizing: border-box;
    padding-left: 10rem;
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
`;

export const Name = styled(Item)`
    font-size: 3rem;
`;

export const Location = styled(Item)`

`;

export const Email = styled(Item)`

`;

export const Bio = styled(Item)`

`;

export const Link = styled.a`
    background-color: #423fcc;
    color: #fff;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 3px;
    transition: background-color .1s ease-in-out;

    &:hover {
        background-color: #5e5bfa;
    }
`;