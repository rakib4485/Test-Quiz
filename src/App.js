import logo from './logo.svg';
import './App.css';
import NabBars from './components/NabBars/NabBars';
import Main from './layout/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import Quiz from './components/Quiz/Quiz';
import About from './components/About/About';
import QuizDetails from './components/QuizDetails/QuizDetails';

function App() {
  const handleQuizCard = (id) =>{

  }
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path: '/quiz',
          loader: async() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistic',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistic></Statistic>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path:'/quiz/:quizId',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>
        }

      ]
    },
    {
      path:'*',
      element:<h2>404 Not Found</h2>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
