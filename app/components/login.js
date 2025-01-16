'use client';

import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    // Logika autentikasi bisa ditambahkan di sini (opsional)
    router.push('/dashboard'); // Redirect ke halaman dashboard
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600" />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/auth/register" className="font-medium text-indigo-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
