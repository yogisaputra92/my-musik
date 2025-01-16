export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/auth/login" className="font-medium text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
