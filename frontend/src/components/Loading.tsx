
import GridLoader from "react-spinners/GridLoader";

interface ILoading {
    visible:boolean;
}

const Loading = ({visible}:ILoading) => {

    if(!visible) {
        return null
    }

    return (
        <div className="h-screen w-full bg-slate-700 bg-opacity-80 absolute flex items-center justify-center z-20">
            <div>
                <GridLoader
                    color={"#2DD4BF"}
                    loading={visible}
                    size={20}
                />
            </div>
        </div>
    )
}

export default Loading;