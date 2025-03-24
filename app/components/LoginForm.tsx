import { useState, useEffect } from "react";
import mockUsers from "../lib/apis/data/mockUsers";
import { Credentials, UserState } from "../types/user";

function LoginForm() {
  const [userCredentials, setUserCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserCredentials((previousCredentials) => ({
      ...previousCredentials,
      [name]: value,
    }));
  };

  const checkForUser = () => {
    const foundUser = mockUsers.find(
      (user: UserState) =>
        user.email === userCredentials.email &&
        user.password === userCredentials.password
    );

    if (foundUser) {
      console.log("User Found");
    } else {
      console.log("User not found");
    }
  };
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          Legal Tech DashBoard
        </a>
        <div className="w-full bg-white rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-600 text-md font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  value={userCredentials.email}
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-mb font-bold text-gray-600 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  value={userCredentials.password}
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
              <div
                className="w-full text-white bg-gray-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-gray-700 font-bold rounded-lg text-md px-5 py-2.5 text-center cursor-pointer"
                onClick={checkForUser}
              >
                Sign in
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* That user does not exist in the database */}
    </section>
  );
}

export default LoginForm;
