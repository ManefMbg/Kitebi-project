
import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import { HiChartPie, HiHome, HiInbox, HiOutlineCloudUpload, HiTable, HiUser } from "react-icons/hi";
import { AuthContext } from "../contexts/AuthProvider";

export const SideDashboard = () => {
  const  {user} = useContext(AuthContext);
  // console.log(user)
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="Flowbite logo" className="w-16 h-16">
        <p>{
            user?.displayName || "Demo User"
        }</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
        <Sidebar.Item href="/" icon={HiHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
