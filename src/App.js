import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Message from './components/Messanger';
function App() {
  return (

    <div>
      <GoogleOAuthProvider clientId='347280592466-91nc85q4b7gcvpdsvktgkrmsgqlsonbe.apps.googleusercontent.com'>
        <Message />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
