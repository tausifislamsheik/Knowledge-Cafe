

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div>
            <h1 className="bg-white dark:bg-primary-dark-color dark:border mb-3 p-5 rounded-lg font-semibold mt-4">{title}</h1>
        </div>
    );
};

export default Bookmark;