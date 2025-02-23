import "./style.css"

const RadioInput = ({ value, label, checked, onChange }) => {
    return (
        <label className="py-3 px-5 border rounded-lg flex items-center justify-center">
            <input type="radio" value={value} checked={checked} onChange={onChange} className="mr-2" />
            {label}
        </label>
    );
}

export default RadioInput