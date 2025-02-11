import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p className="text-gray-300">The page you are looking for does not exist.</p>
      <Link href="/" className="text-blue-500">
        Go back to the home page
      </Link>
    </div>
  );
};

export default NotFound;
