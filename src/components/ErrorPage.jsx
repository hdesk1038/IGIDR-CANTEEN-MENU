import { useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    const errorMessage = error
        ? `${error.status + " : " || ""} ${error.statusText || error.message || "Unknown error"}`
        : "";

    return (
        <div className="text-center">
            <div className="flex items-center flex-col justify-center min-h-screen ">
                <img
                    src="https://i.pinimg.com/736x/ec/16/9f/ec169fc7cb49648cc7eace9c1acdd476.jpg"
                    className="w-[400px] "
                    alt="Error Illustration"
                />
                <h1 className="text-4xl font-bold text-red-700 mb-4">Oops! 😓</h1>
                <p className="text-lg text-red-500">Something went wrong.</p>
                {error && (
                    <p className="mt-3 text-gray-600">
                        <i>{errorMessage}</i>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ErrorPage;
