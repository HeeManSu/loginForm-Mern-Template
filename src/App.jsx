import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Components/Auth/Register'
import Loader from "./Components/Loader/Loader"
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import Home from "./Components/Home/Home"
// import { loadUser } from './app/Actions/userActions'
// import { loadUser } from './app/Slices/userSlice'
import { loadUser } from './app/Actions/userActions'
import { ProtectedRoute } from 'protected-route-react'
import { useEffect } from 'react'
import Login from './Components/Auth/Login'
import ResetPassword from './Components/Auth/ResetPassword'
import ForgetPassword from './Components/Auth/ForgetPassword'

function App() {

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  })


  const { isAuthenticated, user, message, error, loading } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' })
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message])

  useEffect(() => {
    dispatch(loadUser())
  }, [])


  return (
    <div>
      <Router>

        {
          loading ? (<Loader />) : (
            <>

              <Routes>
                <Route exact path='/' element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/home"
                  >
                    <Register />
                  </ProtectedRoute>
                } />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/login' element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/home"
                  >
                    <Login />
                  </ProtectedRoute>
         
                } />
                <Route path='/resetpassword' element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/login"
                  >
                    <ResetPassword />
                  </ProtectedRoute>
                } />
                <Route path='/forgetpassword' element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/login"
                  >
                    <ForgetPassword />
                  </ProtectedRoute>
                } />
              </Routes>
            </>
          )
        }
        <Toaster />
      </Router>

    </div>
  )
}

export default App
