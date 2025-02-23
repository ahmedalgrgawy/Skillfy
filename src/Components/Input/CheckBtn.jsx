import "./style.css"

export const CheckBtn = ({ status, onChange }) => {
    return (
        <div>
            <label className="flex items-center">
                <input onChange={onChange} className="appearance-none hidden toggle-checkbox" type="checkbox" checked={status} />
                <div className="bg-[#ccc] w-16 h-8 rounded-2xl relative duration-300 cursor-pointer toggle-switch"></div>
            </label>
        </div>
    );
}
