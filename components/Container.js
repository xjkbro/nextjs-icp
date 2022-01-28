export const Container = ({ children }) => {
    return (
        <div className="flex justify-center bg-gray-200">
            <div className="max-w-screen-xl flex flex-col min-h-screen w-full">
                {/* <CategoryButtons categories={categories} />
                <LibraryButtons libraries={libraries} /> */}
                <div className="flex-grow">{children}</div>
            </div>
        </div>
    );
};
