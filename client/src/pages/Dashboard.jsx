import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPost from "../components/DashPost";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";

const Dashboard = () => {
  const location = useLocation();
  const [tabs, setTabs] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    console.log(tabFromUrl);
    if (tabFromUrl) {
      setTabs(tabFromUrl);
    }

  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* sidebar  */}
        <DashSidebar />
      </div>
      {/* profile */}
      {tabs === 'profile' && <DashProfile />}
      {/* Post  */}
      {tabs === 'posts' && <DashPost />}
      {/* users */}
      {tabs === 'users' && <DashUsers />}
      {/* comments  */}
      {tabs === 'comments' && <DashComments />}
    </div>
  )
}

export default Dashboard
