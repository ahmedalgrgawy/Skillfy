import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const Password = ({ value, onChange, placeholder, id }) => {

    const [showPass, setShowPass] = useState(false);

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <div className="flex items-center justify-between w-full input-field">
            <input value={value} onChange={onChange} type={showPass ? "text" : 'password'} id={id} placeholder={placeholder || "Password"} className="input-field border-transparent p-0" />

            {showPass ? (
                <FaRegEye size={22} className="text-main_color cursor-pointer" onClick={() => toggleShowPass()} />
            ) : (
                <FaRegEyeSlash size={22} className="text-main_color cursor-pointer" onClick={() => toggleShowPass()} />
            )}
        </div>
    )
}