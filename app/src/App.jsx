import { useState } from 'react';
import Splash from './screens/Splash';
import Home from './screens/Home';
import LearningMap from './screens/LearningMap';
import QuizSelect from './screens/QuizSelect';
import Result from './screens/Result';
import SOSModal from './components/SOSModal';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [isSOSOpen, setIsSOSOpen] = useState(false);

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  const toggleSOS = () => {
    setIsSOSOpen(!isSOSOpen);
  };

  return (
    <div className="phone-frame sm:rounded-3xl relative">
      {currentScreen === 'splash' && <Splash onNavigate={navigate} />}
      {currentScreen === 'home' && <Home onNavigate={navigate} onSOS={toggleSOS} />}
      {currentScreen === 'learning_map' && <LearningMap onNavigate={navigate} onSOS={toggleSOS} />}
      {currentScreen === 'quiz_select' && <QuizSelect onNavigate={navigate} onSOS={toggleSOS} />}
      {currentScreen === 'result' && <Result onNavigate={navigate} />}

      {isSOSOpen && <SOSModal onClose={toggleSOS} />}
    </div>
  );
}

export default App;
