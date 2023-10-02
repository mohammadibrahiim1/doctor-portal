import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, setUser } from "./redux/features/auth/authSlice";
import { auth, onAuthStateChanged } from './firebase/firebase.config'
import { useEffect } from "react";

const App = () => {
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(setUser({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
};

export default App;
