
interface IModal {
    children: React.ReactNode;
    visible?:boolean;
}

const Modal = ({visible=false,children}:IModal) => {
    if(!visible) {
        return null
    }

    return (
        <div className="h-screen bg-slate-700 w-full z-20 absolute bg-opacity-75 flex items-center justify-center">
            {children}
        </div>
    )
}

export default Modal