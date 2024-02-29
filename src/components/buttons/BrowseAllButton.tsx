const BrowseAllButton: React.FC = () => {
    return (
        <button className={`
            font-medium text-black border border-black rounded-md py-3 px-7
            hover:bg-black hover:text-white ease-in duration-200 mt-12 lg:mt-16
        `}>
            Browse All Posts
        </button>
    )
}

export default BrowseAllButton;