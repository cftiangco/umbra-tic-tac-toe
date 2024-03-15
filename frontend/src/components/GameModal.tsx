import Modal from "./Modal"
import { XSButton } from "./Button";

interface IGameModal {
    visible?:boolean;
    message:string;
    onClickContinue:any;
    onClickStop:any;
}

const GameModal = ({message,visible=false,onClickContinue,onClickStop}:IGameModal) => {
    return (
        <Modal visible={visible}>
            <div className="h-52 md:h-64 w-64 md:w-80 bg-white bg-opacity-60 rounded flex items-center justify-center shadow">
                <div className="flex flex-col">
                    <div className="mb-8 flex items-center justify-center">
                        <h2 className="text-xl font-bold text-slate-800">{message}</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <XSButton 
                            label="Stop" 
                            type="danger"
                            onClick={onClickStop}
                        />
                        <XSButton 
                            label="Continue" 
                            type="primary"
                            onClick={onClickContinue} 
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default GameModal