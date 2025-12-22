import UpdateUser from "./components/UpdateUser.jsx";
import {UserProvider} from "./components/UserContext.jsx";
import UserProfile from "./components/UserProfile.jsx";
function App() {
  return (
    <UserProvider>
      <UserProfile/>
      <UpdateUser/>
    </UserProvider>
  );
}

export default App;
