function Button({className, onClick, children}) {
  return (
    <button
        className={`${className} backdrop-blur-md rounded-sm px-3 py-1 text-sm `}
        onClick={onClick}>
            {children}
    </button>
  )
}

export default Button