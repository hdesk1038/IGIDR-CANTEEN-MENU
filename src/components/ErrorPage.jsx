import { useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 text-center">
            <div>
                <img src="https://i.pinimg.com/1200x/13/75/7f/13757ff4b62025394ea27aaf46fe12ae.jpg" className="w-[300px]" alt="" />
                <h1 className="text-4xl font-bold text-red-700 mb-4">Oops! 😓</h1>
                <p className="text-lg text-red-500">Something went wrong.</p>
                <p className="mt-3 text-gray-600">
                    <i>{error.status} : {error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
