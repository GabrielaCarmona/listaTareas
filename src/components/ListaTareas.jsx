import Tarea from './Tarea';
import Formulario from './Formulario';
import '../styles/listaDeTareas.css';
import { useDispatch, useSelector } from 'react-redux';
import { eliminarTarea } from '../actions/eliminarTarea';
import { completarTarea } from '../actions/completarTarea';
import { realizarTarea } from '../actions/realizarTarea';
import { useState } from 'react';

export const ListaTareas = () => {
  const dispatch = useDispatch();
  const { listaTareas } = useSelector(state => state.tareas);
  const [editTask, setEditTask] = useState({});

  const handleEliminarTarea = id => {
    dispatch(eliminarTarea(id));
  }

  const handleCompletarTarea = id => {
    dispatch(completarTarea(id));
  };

  const handleEditarTarea = (id, tarea) => {
    setEditTask({
      id: id,
      tarea: tarea
    })
  }

  const handleRealizarTarea = id => {
    dispatch(realizarTarea(id));
  };

  return (
    <>
      <Formulario
        textoEditar={editTask.tarea}
        idEditar={editTask.id}
        setEditTask={setEditTask} />
      <div className='lista-contenedor'>
        {
          (listaTareas.length > 0) && listaTareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              tarea={tarea.tarea}
              estatus={tarea.estatus}
              handleEliminarTarea={handleEliminarTarea}
              handleEditarTarea={handleEditarTarea}
              completarTarea={handleCompletarTarea}
              handleRealizarTarea={handleRealizarTarea} />
          )
        }
      </div>
    </>
  );
};
