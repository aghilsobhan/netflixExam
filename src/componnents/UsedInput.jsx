export const Message=({lable,placeholder})=>{
return(
    <div className="text-sm w-full">
        <lable className="text-border font-semibold">{lable}</lable>
        <textarea className="w-full h-40 mt-2 p-6 text-white bg-main border-border rounded" placeholder={placeholder}></textarea>

    </div>
)
};
export const Select=({lable,options,onChange})=>{
    return(
        <>
        <lable className="text-border font-semibold">{lable}</lable>
        <select className="w-full mt-2 px-6 py- text-text bg-main border border-border rounded" onChange={onChange}>
            {options.map((option,i)=>(
                <option key={i} value={option.value}>
                    {option.title}
                </option>
            ))}
        </select>
       
        </>
    )
}
export const Input=({lable,placeholder,type,bg})=>{
    return(
        <div className="text-sm w-full">
            <lable className="text-border font-semibold">{lable}</lable>
            <input required  type={type} placeholder={placeholder}
             className={`w-full text-sm mt-2 p-4 border border-border rounded text-white ${bg?"bg-main":"bg-dry"}`} />

        </div>
    )
}