export const listItem = `
    display: flex;
    align-items: center;

    margin: 0;
    padding: 15px 87px;
    margin-right: 27px;
    border-bottom: 2px solid #FFFFFF;

    &:first-child {
        border-top: 2px solid #FFFFFF;
    }

    &:hover {
        span {
            font-weight: 600;
        }
    }

    a {
        display: flex;
        align-items: center;
        margin-right: auto;
        text-decoration: none;
    }
`;