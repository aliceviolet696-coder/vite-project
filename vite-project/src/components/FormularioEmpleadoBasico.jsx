import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function FormularioEmpleadoBasico({ onGuardar }) {
    const location = useLocation();
    const navigate = useNavigate();

    // Recuperar el empleado seleccionado enviado desde la lista
    const empleadoEditado = location.state?.empleado || null;

    // Cargar los datos recuperados en el formulario
    const [nombre, setNombre] = useState(empleadoEditado?.nombre || '');
    const [edad, setEdad] = useState(empleadoEditado?.edad ?? '');
    const [departamento, setDepartamento] = useState(
        empleadoEditado?.departamento || ''
    );

    function manejarSubmit(e) {
        e.preventDefault();

        const empleado = {
            id: empleadoEditado ? empleadoEditado.id : Date.now(),
            nombre,
            edad: Number(edad),
            departamento
        };

        onGuardar(empleado);

        if (empleadoEditado) {
            navigate('/basicos');
        }

        setNombre('');
        setEdad('');
        setDepartamento('');
    }

    return (
        <form onSubmit={manejarSubmit}>
            <h2>
                {empleadoEditado
                    ? 'Editar Empleado'
                    : 'Formulario de Empleado'}
            </h2>

            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="edad">Edad:</label>
                <input
                    type="number"
                    id="edad"
                    min="18"
                    max="100"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="departamento">Departamento:</label>
                <input
                    type="text"
                    id="departamento"
                    value={departamento}
                    onChange={(e) => setDepartamento(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Guardar</button>

            {empleadoEditado && (
                <button type="button" onClick={() => navigate('/basicos')}>
                    Cancelar
                </button>
            )}
        </form>
    );
}

export default FormularioEmpleadoBasico;
