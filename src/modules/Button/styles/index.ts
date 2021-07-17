export const btnStyles = `

    position: relative;

    padding: 9px 32px;

    border-radius: 50px;
    border: none;
    outline: none;
    background: #000;

    transition: 0.3s;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -2px; 
        border-radius: inherit; 
        background: linear-gradient(250.88deg, #FF057C -6.54%, #4CC3FF 118.43%);
    }

    &:hover {
        background: linear-gradient(250.88deg, #FF057C -6.54%, #4CC3FF 118.43%);

        box-shadow: 2px 7px 18px 1px rgba(76, 195, 255, 0.7);
    }
`;