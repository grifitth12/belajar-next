'use client'

interface ViewUSerButtonProps{
    userId: number
}

const ViewUSerButton: React.FC<ViewUSerButtonProps> = ({userId}) => {
    const handleCLick = () => alert(`user id: ${userId}`)
    return (
        <>
        <button onClick={handleCLick}>lihat user</button>
        </>
    )
}

export default ViewUSerButton;