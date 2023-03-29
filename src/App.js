import logo from './logo.svg';
import './App.css';

function Check(x){
  if(x) {
    return (
      <h1>Say Hello</h1>
    );
  } else return (
    <h1>Login</h1>
  );
}
function App() {
  const isUserLoggedIn = true;
  
  return Check(isUserLoggedIn);
}
export default App;

