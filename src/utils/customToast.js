import toast from 'react-hot-toast';
import { LogoDark } from '../assets/images';

export const customToast = (message) => {
    toast.custom((t) => (
        <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-1 w-0 p-4">
                <div className="flex items-start justify-center ">
                    <div className="flex-shrink-0 pt-0.5">
                        <img
                            className="h-16 w-16 rounded-full object-contain object-center"
                            src={LogoDark}
                            alt=""
                        />
                    </div>
                    <div className="ml-3 flex-1">
                        <p className="mt-1 text-sm text-gray-600">
                            {message}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                    Close
                </button>
            </div>
        </div>
    ))

};