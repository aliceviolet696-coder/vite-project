import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import data from './data/empleados';
import Empleados from './pages/Empleados.jsx';
import FormularioEmpleado from './components/FormularioEmpleado.jsx';
import Navbar from './components/Navbar.jsx';
import PaginaNoEncontrada from './components/PaginaNoEncontrada.jsx';
import EmpleadosPage from './pages/EmpleadosPage.jsx';

function App() {
  const [empleados, setEmpleados] = useState(data);

  function agregarEmpleado(nuevoEmpleado) {
    setEmpleados([...empleados, nuevoEmpleado]);
  }

  function eliminarEmpleado(id) {
    const filtrados = empleados.filter((empleado) => empleado.id !== id);
    setEmpleados(filtrados);
  }

  function editarEmpleado(empleadoEditado) {
    const actualizados = empleados.map((empleado) => {
      if (empleado.id === empleadoEditado.id) {
        return { ...empleado, ...empleadoEditado };
      }
      return empleado;
    });
    setEmpleados(actualizados);
  }

  function manejarGuardar(empleado) {
    const existe = empleados.find((e) => e.id === empleado.id);
    if (existe) {
      editarEmpleado(empleado);
    } else {
      agregarEmpleado(empleado);
    }
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Empleados empleados={empleados} onEliminar={eliminarEmpleado} />}
        />
        <Route
          path="/empleados"
          element={<Empleados empleados={empleados} onEliminar={eliminarEmpleado} />}
        />
        <Route path="/nuevo" element={<FormularioEmpleado onGuardar={manejarGuardar} />} />
        <Route
          path="/editar/:id"
          element={
            <FormularioEmpleado
              empleados={empleados}
              onGuardar={manejarGuardar}
            />
          }
        />
        <Route path="/basicos/:id?" element={<EmpleadosPage />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
