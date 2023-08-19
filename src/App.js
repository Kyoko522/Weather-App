import UilReact from '@iconscout/react-unicons/icons/uil-react' //Importing so that i can use icons for the weather
import './App.css';
import TopButtons from './components/TopButtons';

function App() {
  return (
   <div className="mx-auto max-w-screen-md mt-5 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadown-gray-400">
    <TopButtons/>
   </div> //hardcoding the background color
  );
}

export default App;
