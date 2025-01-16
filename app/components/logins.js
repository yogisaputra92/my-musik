'use client';

import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Login() {

    const router = useRouter();
    const handleLogin = (e) => {
        e.preventDefault(); // Mencegah refresh halaman
        // Logika autentikasi bisa ditambahkan di sini (opsional)
        router.push('/dashboard'); // Redirect ke halaman dashboard
      };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center">
        <img src="/Info Movie.png"></img>
        {/* <h2 className="text-3xl font-bold">Selamat Datang di KayaCoffee</h2> */}
        <p className="text-sm mt-2 text-gray-400">Silahkan login terlebih dahulu</p>
      </div>
      <form
        onSubmit={handleLogin}
        action="/"
        method="post"
        className="bg-gray-800 p-6 mt-6 rounded shadow-lg w-80"
      >
        <div className="mb-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 py-2 rounded hover:bg-green-600"
        >
          Sign in
        </button>
      <div className="mt-4 m-4 text-center inline justify-between w-80">
        <p>Belum Punya Account ? </p>
        <Link href="/auth/register">
          <p className="text-sm text-green-400 hover:underline">Signup</p>
        </Link>
      </div>
      </form>
    </div>
  );
}
