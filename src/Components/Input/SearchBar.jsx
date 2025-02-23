import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, handleSearch, onChange }) {


    return (
        <label className="flex justify-between items-center px-4 py-3 border border-gray-300 rounded-3xl ">
            <input
                type="text"
                className="w-full outline-none"
                placeholder="What Do You Want To Learn..."
                value={searchTerm}
                onChange={onChange}
            />
            <FaSearch size={25} className="text-main_color_darker cursor-pointer" onClick={handleSearch} />
        </label>
    );
}

export default SearchBar;