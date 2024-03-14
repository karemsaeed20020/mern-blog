import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import {HiArrowSmRight, HiUser, HiDocumentText, HiOutlineUserGroup, HiAnnotation} from 'react-icons/hi'
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";

const DashSidebar = () => {
    const location = useLocation();
  const [tabs, setTabs] = useState('');
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    console.log(tabFromUrl);
    if (tabFromUrl) {
      setTabs(tabFromUrl);
    }

  }, [location.search]);
  const dispatch = useDispatch();
    const handleSignOut = async () => {
      try {
        const res = await fetch('/api/user/signout', {
          method: "POST",
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signoutSuccess());
        }

      } catch (error) {
        console.log(error.message);
      }
    }
  return (
    <Sidebar className="w-full">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
            <Link to={'/dashboard?tab=profile'}>
                <Sidebar.Item label={currentUser.isAdmin ? 'Admin' : 'User'} active={tabs === "profile"} icon={HiUser} as={'div'} labelColor="dark">Profile</Sidebar.Item>
            </Link>
              {currentUser.isAdmin && (
              <Link to='/dashboard?tab=posts'>
                <Sidebar.Item
                  active={tabs === 'posts'}
                  icon={HiDocumentText}
                  as='div'
                >
                  Posts
                </Sidebar.Item>
              </Link>
            )}
            {currentUser.isAdmin && (
              <>
              <Link to='/dashboard?tab=users'>
                <Sidebar.Item
                  active={tabs === 'users'}
                  icon={HiOutlineUserGroup}
                  as='div'
                >
                  Users
                </Sidebar.Item>
              </Link>
              <Link to='/dashboard?tab=comments'>
                <Sidebar.Item
                  active={tabs === 'comments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Comments
                </Sidebar.Item>
              </Link>
              </>
              
            )}
            <Sidebar.Item onClick={handleSignOut} active icon={HiArrowSmRight} className="cursor-pointer">Sign Out</Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar
