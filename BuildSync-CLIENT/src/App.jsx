import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ClientDashboard from "./pages/ClientDashboard.jsx";
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBaseRoutes from "./utils/RoleBaseRoutes"; 
import AdminSummary from "./components/dashboard/AdminSummary";
import DepartmentList from "./components/department/DepartmentList";
import AddDepartment from "./components/department/AddDepartment";
import EditDepartment from "./components/department/EditDepartment";
import List from "./components/employee/List";
import Add from "./components/employee/Add";
import View from "./components/employee/View";
import Edit from "./components/employee/Edit";
import Clientlist from "./components/client/List";
import View1 from "./components/client/View";
import AddClient from "./components/client/Add";
import EditClient from "./components/client/Edit";
import AddSalary from "./components/salary/Add";
import ViewSalary from "./components/salary/View";
import Summary from './components/EmployeeDashboard/Summary'
import Summary1 from './components/ClientDashboard/Summary'
import LeaveList from './components/leave/List'
import AddLeave from './components/leave/Add'
import Setting from "./components/EmployeeDashboard/Setting";
import Setting1 from "./components/ClientDashboard/Setting";
import Table from "./components/leave/Table";
import Detail from "./components/leave/Detail";
import Table1 from "./components/workReq/Table";
import Detail1 from "./components/workReq/Detail";
import Attendance from "./components/attendance/Attendance";
import AttendanceReport from "./components/attendance/AttendanceReport";
import AddWork from "./components/workReq/Add";
import WorkList from "./components/workReq/List";
import Chatbot from "./components/Chatbot/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoutes requiredRole={["admin"]}>
                <AdminDashboard />
                <Chatbot />
              </RoleBaseRoutes>
            </PrivateRoutes>
          }
        >
          <Route index element={<AdminSummary />} />
          <Route path="departments" element={<DepartmentList />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="department/:id" element={<EditDepartment />} />
          <Route path="employees" element={<List />} />
          <Route path="add-employee" element={<Add />} />
          <Route path="employees/:id" element={<View />} />
          <Route path="employees/edit/:id" element={<Edit />} />
          <Route path="employees/salary/:id" element={<ViewSalary />} />
          <Route path="clients" element={<Clientlist />} />
          <Route path="add-client" element={<AddClient />} />
          <Route path="clients/edit/:id" element={<EditClient />} />
          <Route path="clients/:id" element={<View1 />} />
          <Route path="salary/add" element={<AddSalary />} />
          <Route path="leaves" element={<Table />} />
          <Route path="leaves/:id" element={<Detail />} />
          <Route path="work" element={<Table1 />} />
          <Route path="work/:id" element={<Detail1 />} />
          <Route path="employees/leaves/:id" element={<LeaveList />} />
          <Route path="setting" element={<Setting />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="attendance-report" element={<AttendanceReport />} />
        </Route>

        <Route
          path="/employee-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoutes requiredRole={["admin", "employee"]}>
                <EmployeeDashboard />
              </RoleBaseRoutes>
            </PrivateRoutes>
          }
        >
          <Route index element={<Summary />} />
          <Route path="profile/:id" element={<View />} />
          <Route path="leaves/:id" element={<LeaveList />} />
          <Route path="add-leave" element={<AddLeave />} />
          <Route path="salary/:id" element={<ViewSalary />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        <Route
          path="/client-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoutes requiredRole={["admin", "client"]}>
                <ClientDashboard />
              </RoleBaseRoutes>
            </PrivateRoutes>
          }
        >
          <Route index element={<Summary1 />} />
          <Route path="profile/:id" element={<View1 />} />
          <Route path="setting" element={<Setting1 />} />
          <Route path="work/:id" element={<WorkList />} />
          <Route path="add-work" element={<AddWork />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
