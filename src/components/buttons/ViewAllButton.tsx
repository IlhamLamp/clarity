const VieawAllButton: React.FC = () => {
    return (
        <button 
            className={`
                flex justify-center font-semibold text-black border border-black
                rounded-md py-3 px-7 hover:bg-black hover:text-white ease-in
                duration-200 mx-auto
            `}>
            View All Posts
        </button>
    )
}

export default VieawAllButton;