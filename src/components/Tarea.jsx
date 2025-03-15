import '../styles/tarea.css';
import { AiOutlineCloseCircle, AiOutlineClockCircle, AiOutlineEdit } from 'react-icons/ai';

function Tarea({ id, tarea, completarTarea, handleEliminarTarea, estatus, handleEditarTarea, handleRealizarTarea }) {

  const gestionarClassName = (estatus) => {
    switch (estatus) {
      case 'Completado':
        return  'completada'
      case 'Progreso':
        return  'enProgreso'
      default:
        return '';
    }
  }

  return (
    <div className={`tarea-contenedor ${gestionarClassName(estatus)}`}>
      <div className='contenedor-iconos'>
        <AiOutlineClockCircle
          className={`icono icono-progreso ${estatus !== 'Completado' ? '' : 'disabled'}`  }
          onClick={() => handleRealizarTarea(id)} />
      </div>
      <div
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {estatus === 'Progreso' ? 'En Progreso - ' : ''}
        {tarea}
      </div>
      <div className='contenedor-iconos'>
        <AiOutlineEdit
          className='icono icono-editar'
          onClick={() => handleEditarTarea(id, tarea)}
        />

        <AiOutlineCloseCircle
          className='icono icono-eliminar'
          onClick={() => handleEliminarTarea(id)}
        />
      </div>
    </div>
  );
}

export default Tarea;