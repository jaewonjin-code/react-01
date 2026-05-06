const ButtonCom = ({ message, handle, children, style }) => {
  return (
    <>
      <button onClick={() => handle(message)} className={style}>
        {children}
      </button>
    </>
  );
};

export default ButtonCom;
