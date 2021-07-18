export const wrapper = `
    display: flex;

    position: relative;
    z-index: 1;
    padding: 280px 88px 133px;
`;

export const filtersStyles = `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 50px;

    p {
        margin: 0;
        margin-bottom: 15px;

        &:first-child{
            margin-bottom: 61px;
        }
    }
`;

export const listContainer = `
    display: flex;

    overflow-x: scroll;
`;