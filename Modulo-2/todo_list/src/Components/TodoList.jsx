import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({});
  
  const handleAddTodo = () => {
    if (headingInput.trim() !== ''){
        setTodos([...todos, {heading: headingInput, lists: []}]);
        setHeadingInput('');
    }
  };

    // Función para manejar la adición de un nuevo elemento de lista a un encabezado de tarea específico
    const handleAddList = (index) => {
        // Verifica si la entrada para el índice dado no está vacía o solo contiene espacios en blanco
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos]; // Crea una copia del array de tareas actual
            newTodos[index].lists.push(listInputs[index]); // Agrega el nuevo elemento de lista al array de listas del encabezado correspondiente
            setTodos(newTodos); // Actualiza el estado de tareas con el nuevo elemento de lista
            setListInputs({ ...listInputs, [index]: '' }); // Limpia el campo de entrada para ese índice
        }
    };

    // Función para actualizar el valor de entrada de la lista para un índice de encabezado específico
    const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value }); // Actualiza el estado de listInputs para el índice correspondiente
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => setHeadingInput(e.target.value)}   
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
            {todos.map((todo, index) => (
                <div key={index} className="todo-card">
                    <div className="heading_todo">
                        <h3>{todo.heading}</h3>
                        <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                    </div>
                    <ul>
                        {todo.lists.map((list, listIndex) => (
                            <li key={listIndex} className='todo_inside_list'>
                                {/* Muestra el contenido de texto del elemento de lista */}
                                <p>{list}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="add_list">
                        <input
                            type="text"
                            className="list-input"
                            placeholder="Agregar Lista"
                            value={listInputs[index] || ''}// Usa el valor del array listInputs basado en el índice del encabezado actual
                            onChange={(e) => handleListInputChange(index, e.target.value)}/>
                        {/* Botón para agregar el elemento de la lista al encabezado correspondiente */}
                        <button className="add-list-button" onClick={() => handleAddList(index)}>Agregar Lista</button>
                    </div>
                </div>
            ))}
      </div>
    </>
  );
};

export default TodoList;
