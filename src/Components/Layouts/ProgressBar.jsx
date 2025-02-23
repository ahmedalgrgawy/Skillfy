function ProgressBar({ percentage }) {
    return (
        <div className="h-1 bg-[#f2f2f2] rounded relative">
            <div className="h-full bg-main_color rounded" style={{ width: `${percentage}%` }}></div>
            <div className="absolute top-1/2 right-[-15%] translate-y-[-50%] text-[12px] font-semibold">{`${percentage}%`}</div>
        </div>
    );
}

export default ProgressBar