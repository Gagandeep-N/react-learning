
function ColorPalette() {

    const handleRedClick = () => {
        document.body.style.backgroundColor = "red";
    }

    const handleGreenClick = () => {
        document.body.style.backgroundColor = "green";
    }

    const handleBlueClick = () => {
        document.body.style.backgroundColor = "blue";
    }

    return (
        <>
            <div className="bg-white fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <button onClick={handleRedClick} className="bg-red-500">Red</button>
                <button onClick={handleGreenClick} className="pl-[4px] bg-green-500">Green</button>
                <button onClick={handleBlueClick} className="pl-[4px] bg-blue-500">Blue</button>
            </div>
        </>
    )
}

export default ColorPalette;