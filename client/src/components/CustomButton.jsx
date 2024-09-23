const CustomButton = ({ title, containerStyles, iconRight, type, onClick, disabled }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        type={type || "button"}
        className={`inline-flex items-center text-base  ${containerStyles} disabled:bg-blue-200`}
      >
        {title}
  
        {iconRight && <div className='ml-2'>{iconRight}</div>}
      </button>
    );
  };
  
  export default CustomButton;