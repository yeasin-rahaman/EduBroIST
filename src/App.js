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
            <Route path="/allQuestions" element={<AllQuestions />} />
            <Route path="/allBooks" element={<AllBooks />} />
            <Route path="/allSyllabus" element={<AllSyllabus />} />
            <Route path="/allBlogs" element={<AllBlogs />} />
            <Route path="/allNotes" element={<AllNotes />} />
            <Route path="/allLabs" element={<AllLabs />} />


            {/* Admin Dashboard  */}

            {/* <Route path='/admin-dashboard' element={<AdminRoute><AdminDashboard /></AdminRoute>}>
              <Route path='/admin-dashboard' element={<AdminRoute><AdminWelcome /></AdminRoute>} />
              <Route path='/admin-dashboard/welcome' element={<AdminRoute><AdminWelcome /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-questions' element={<AdminRoute><AdminQuestion /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-blogs' element={<AdminRoute><AdminBlogs /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-notes' element={<AdminRoute><AdminNotes /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-books' element={<AdminRoute><AdminBooks /></AdminRoute>} />
              <Route path='/admin-dashboard/admin-syllabus' element={<AdminRoute><AdminSyllabus /></AdminRoute>} />
              <Route path='/admin-dashboard/manage-questions' element={<AdminRoute><ManageQuestion /></AdminRoute>} />
              <Route path='/admin-dashboard/make-admin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />
            </Route> */}

            {/* User Dashboard  */}

            {/* <Route path="/dashboard" element={<Dashboard />}>
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
              <Route path='/dashboard/pending-questions' element={<PendingQuestions />} />
            </Route>

            <Route path='/question-details/:id' element={<QuestionDetailsSolve />} />

            <Route path='/blog-details/:id' element={<BlogDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
       

         */}

          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;  