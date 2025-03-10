import { FormEvent } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      router.push("/admin");
    } else {
      // Handle errors
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border p-4 rounded-md bg-slate-700"
      >
        <p className="text-white">Username</p>
        <input
          className="rounded-md p-2"
          name="username"
          placeholder="Username"
          required
        />
        <p className="text-white">Password</p>
        <input
          className="rounded-md p-2"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          className="text-white rounded-md py-2 bg-slate-500"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
