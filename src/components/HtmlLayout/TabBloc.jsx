export default function TabBlock({children, buttons, ButtonsContainer = 'ul'}) {
    // const ButtonsContainer = buttonsContainer;
    return (
        <>
            {/* <menu>
                { buttons }
            </menu> */}
            <ButtonsContainer>
                { buttons }
            </ButtonsContainer>
            { children }
        </>
    )
}