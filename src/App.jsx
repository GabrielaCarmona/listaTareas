import './App.css';
import { Provider } from 'react-redux'
import { store } from './store';
import { ListaTareas } from './components/ListaTareas';
import { useEffect } from 'react';
import { ToggleTheme } from './utils/ToggleTheme';

function App() {
  const theme = (localStorage.getItem('theme'));

  useEffect(() => {
    if ((theme) && theme === 'dark') {
      document.body.setAttribute('data-theme', 'dark')
    }
  }, [theme]);

  return (
    <Provider store={store}>
      <ToggleTheme />
      <div className='app-tareas'>
        <div className='tareas-contenedor'>
          <h1>Lista de <span className='h1-amarillo'>Tareas</span></h1>
          <ListaTareas />
        </div>
      </div>
    </Provider>
  );
}

export default App;