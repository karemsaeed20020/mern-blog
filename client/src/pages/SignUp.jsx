import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left  */}
        <div className="flex-1">
          <Link to={'/'} className="dark:text-white whitespace-nowrap text-4xl font-bold">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">Kareem</span>
            Blog
          </Link>
          <p className="text-sm mt-5">
          This is a demo project. You can sign in with your email and password or with Google.
          </p>
        </div>
        {/* right  */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput placeholder="Username" type="text"  id="username"/>
            </div>
            <div>
              <Label value="Your email" />
              <TextInput placeholder="name@company.com" type="email"  id="email"/>
            </div>
            <div>
              <Label value="Your password" />
              <TextInput placeholder="Password" type="password"  id="password"/>
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={'/sign-in'} className="text-blue-500">
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp
