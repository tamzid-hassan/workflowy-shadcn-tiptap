
function MainContainer({ children }) {
    return (
        <div className="max-w-[75%] mx-auto mt-20 w-full h-screen flex flex-col ">
            {children}
        </div>
    )
}

export default MainContainer