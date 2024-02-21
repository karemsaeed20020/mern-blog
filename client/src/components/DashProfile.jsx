import { Button, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

const DashProfile = () => {
    const {currentUser} = useSelector(state => state.user);
  return (
    <div className="p-3 w-full max-w-lg mx-auto">
      <h1 className="font-semibold text-center text-3xl my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md rounded-full overflow-hidden">
            <img src={currentUser.profilePicture} alt="user" className="rounded-full w-full h-full border-8 border-[lightgray]" />
        </div>
        <TextInput type="text" id="username" placeholder="username" defaultValue={currentUser.username} />
        <TextInput type="email" id="email" placeholder="Email" defaultValue={currentUser.email} />
        <TextInput type="password" id="password" placeholder="Password"  />
        <Button type="submit" gradientDuoTone='purpleToBlue' outline>Update</Button>
      </form>
      <div className="text-red-500 mt-5 flex justify-between">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign out</span>
      </div>
    </div>
  )
}

export default DashProfile
