import Header from './components/header/Header';
import './App.css';
import Shop from './components/shop/Shop';
import QuestionsAnswers from './components/QuestionAnswer/QuestionsAnswers';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <QuestionsAnswers></QuestionsAnswers>
    </div>
  );
}

export default App;
