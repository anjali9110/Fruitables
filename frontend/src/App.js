import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import './bootstrapC.scss'
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { loginRedux } from './store/userSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
function App() {
 
  const dispatch = useDispatch()
 

  const fetchUserDetails = async()=>{
      const dataResponse = await fetch(SummaryApi.current_user.url,{
        method : SummaryApi.current_user.method,
        credentials : 'include'
      })

      const dataApi = await dataResponse.json()
console.log(dataApi);
      if(dataApi.success){
        dispatch(loginRedux(dataApi.data))
      }
  }

  useEffect(()=>{
    /**user Details */
    fetchUserDetails()
    

  },[])

  useEffect(() => {
    const spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
}, []);

  return (
    <>

<Context.Provider value={{
          fetchUserDetails, // user detail fetch 
          
      }}>
     
    <Header/>
    <ScrollToTop/>
    <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: 'auto', maxWidth: '500px' }} // Adjust the width of the ToastContainer
      />
      <Outlet/>
      <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;
