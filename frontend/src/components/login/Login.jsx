import React from 'react';
import '../../tailwind.css';

function Login() {
    return (
        <>
        <section className="min-h-screen items-center">
            <div className="flex items-center justify-center">
                <div className="w-full max-w-sm p-6 
                    rounded-lg shadow-md bg-orange-200">
                    <h2 className="text-3xl text-center mb-6 font-cinzel text-red-800 font-bold">Login</h2>
                    <hr></hr>
                    <br></br>
                    <form className="space-y-4">
                        <label for="email" className="block font-medium text-1xl">Username</label>
                        <input
                            type="email" name="email"
                            className="w-full rounded-lg bg-orange-100 p-3 focus:ring-primary-600"
                            placeholder='Your Username'
                        />
                        <label for="password" className="block font-medium text-1xl">Password</label>
                        <input
                            type="password" name="password"
                            className="w-full rounded-lg bg-orange-100 p-3 focus:ring-primary-600"
                            placeholder='*******'
                        />
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50" required="" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-800">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                        </div>
                            <button type="submit" class="block mx-auto text-white text-2xl rounded-lg bg-blue-600 hover:bg-blue-800 hover:border-2 hover:border-neutral-950 p-3">Sign in</button>
                        <p class="text-sm font-light text-black">
                            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>


        </section>
        </>
    )

}
export default Login;
