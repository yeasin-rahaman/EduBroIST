import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import AuthProvider from './context/AuthProvider.js/AuthProvider';

import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import AllQuestions from './Pages/Services/AllQuestions/AllQuestions';
import AllBooks from './Pages/Services/AllBooks/AllBooks';
import AllSyllabus from './Pages/Services/AllSyllabus/AllSyllabus';
import AllBlogs from './Pages/Services/AllBlogs/AllBlogs';
import AllNotes from './Pages/Services/AllNotes/AllNotes';
import AllLabs from './Pages/Services/AllLabs/AllLabs';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard/AdminDashboard';
import AdminRoute from './Login/AdminRoute/AdminRoute';
import AdminWelcome from './Pages/AdminDashboard/AdminWelcome/AdminWelcome';
import AdminQuestion from './Pages/AdminDashboard/AdminQuestion/AdminQuestion';
import AdminBlogs from './Pages/AdminDashboard/AdminBlogs/AdminBlogs';
import MakeAdmin from './Pages/AdminDashboard/MakeAdmin/MakeAdmin';
import ManageQuestion from './Pages/AdminDashboard/ManageQuestions/ManageQuestion';
import AdminSyllabus from './Pages/AdminDashboard/AdminSyllabus/AdminSyllabus';
import AdminNotes from './Pages/AdminDashboard/AdminNotes/AdminNotes';
import AdminBooks from './Pages/AdminDashboard/AdminBooks/AdminBooks';
import AdminLabs from './Pages/AdminDashboard/AdminLabs/AdminLabs';
import Dashboard from './Pages/UserDashboard/Dashboard/Dashboard';
import DashboardWelcome from './Pages/UserDashboard/DashboardWelcome/DashboardWelcome';
import MyQuestions from './Pages/UserDashboard/MyQuestions/MyQuestions';
import MyBooks from './Pages/UserDashboard/MyBooks/MyBooks';
import MySyllabus from './Pages/UserDashboard/MySyllabus/MySyllabus';
import CustomerReview from './Pages/UserDashboard/CustomerReview/CustomerReview';
import MyBlogs from './Pages/UserDashboard/MyBlogs/MyBlogs';
import MyNotes from './Pages/UserDashboard/MyNotes/MyNotes';
import MyLabs from './Pages/UserDashboard/MyLabs/MyLabs';
import AddQuestionDashboard from './Pages/UserDashboard/AddQuestionDashboard/AddQuestionDashboard';
import AddBooksDashboard from './Pages/UserDashboard/AddBooksDashboard/AddBooksDashboard';
import AddSyllabusDashboard from './Pages/UserDashboard/AddSyllabusDashboard/AddSyllabusDashboard';
import AddLabsDashboard from './Pages/UserDashboard/AddLabsDashboard/AddLabsDashboard';
import AddNotesDashboard from './Pages/UserDashboard/AddNotesDashboard/AddNotesDashboard';
import AddBlogsDashboard from './Pages/UserDashboard/AddBlogsDashboard/AddBlogsDashboard';
import UserProfile from './Pages/UserDashboard/UserProfile/UserProfile';
import EditProfile from './Pages/UserDashboard/UserProfile/EditProfile';
import BlogDetails from './Pages/Services/AllBlogs/BlogDetails';
import QuestionDetailsSolve from './Pages/Services/QuestionDetailsSolve/QuestionDetailsSolve';
import Contact from './Pages/Contact/Contact';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AllAssignments from './Pages/Services/AllAssignments/AllAssignments';
import AssignmentSolve from './Pages/Services/AssignmentSolve/AssignmentSolve';
import MyAssignment from './Pages/UserDashboard/MyAssignment/MyAssignment';
import AdminAssignment from './Pages/AdminDashboard/AdminAssignment/AdminAssignment';
import AddAssignmentDashboard from './Pages/UserDashboard/AddAssignmentDashboard copy/AddAssignmentDashboard';





function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<AllQuestions />} />
            <Route path="/books" element={<AllBooks />} />
            <Route path="/syllabus" element={<AllSyllabus />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/notes" element={<AllNotes />} />
            <Route path="/labs" element={<AllLabs />} />
            <Route path="/assignments" element={<AllAssignments />} />


            {/* Admin Dashboard  */}

            <Route path='/admin-dashboard' element={<AdminRoute><AdminDashboard /></AdminRoute>}>
              <Route path='/admin-dashboard' element={<AdminRoute><AdminWelcome /></AdminRoute>} />
              <Route path='/admin-dashboard/welcome' element={<AdminRoute><AdminWelcome /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-questions' element={<AdminRoute><AdminQuestion /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-assignments' element={<AdminRoute><AdminAssignment /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-blogs' element={<AdminRoute><AdminBlogs /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-notes' element={<AdminRoute><AdminNotes /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-books' element={<AdminRoute><AdminBooks /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-lab' element={<AdminRoute><AdminLabs /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-syllabus' element={<AdminRoute><AdminSyllabus /></AdminRoute>} />
              <Route path='/admin-dashboard/manage-questions' element={<AdminRoute><ManageQuestion /></AdminRoute>} />
              <Route path='/admin-dashboard/make-admin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path='/admin-dashboard/add-assignment' element={<AddAssignmentDashboard />} />
              <Route path='/admin-dashboard/my-assignments' element={<MyAssignment />} />


            </Route>

            {/* User Dashboard  */}

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path='/dashboard' element={<DashboardWelcome />} />
              <Route path='/dashboard/welcome' element={<DashboardWelcome />} />
              <Route path='/dashboard/my-questions' element={<MyQuestions />} />
              <Route path='/dashboard/my-books' element={<MyBooks />} />
              <Route path='/dashboard/my-syllabus' element={<MySyllabus />} />
              <Route path='/dashboard/user-review' element={<CustomerReview />} />
              <Route path='/dashboard/my-blogs' element={<MyBlogs />} />
              <Route path='/dashboard/my-notes' element={<MyNotes />} />
              <Route path='/dashboard/my-labs' element={<MyLabs />} />



              <Route path='/dashboard/add-question' element={<AddQuestionDashboard />} />

              <Route path='/dashboard/add-books' element={<AddBooksDashboard />} />
              <Route path='/dashboard/add-syllabus' element={<AddSyllabusDashboard />} />
              <Route path='/dashboard/add-labs' element={<AddLabsDashboard />} />
              <Route path='/dashboard/add-notes' element={<AddNotesDashboard />} />
              <Route path='/dashboard/add-blogs' element={<AddBlogsDashboard />} />
              <Route path='/dashboard/user-profile' element={<UserProfile />} />
              <Route path='/dashboard/edit-profile' element={<EditProfile />} />
            </Route>

            <Route path='/question-details/:id' element={<QuestionDetailsSolve />} />
            <Route path='/assignment-details/:id' element={<AssignmentSolve />} />

            <Route path='/blog-details/:id' element={<BlogDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />




          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;  