import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmpleadosList from '../components/EmpleadosList';
import FormularioEmpleadoBasico from '../components/FormularioEmpleadoBasico';
import data from '../data/empleados';

function EmpleadosPage() {
    const [empleados, setEmpleados] = useState(data);
    const navigate = useNavigate();
    const { id } = useParams();

    const modoEdicion = Boolean(id);

    function agregarEmpleado(nuevoEmpleado) {
        setEmpleados([...empleados, nuevoEmpleado]);
    }

    function eliminarEmpleado(id) {
        setEmpleados(empleados.filter((empleado) => empleado.id !== id));
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

    // Navegar a editar enviando el empleado seleccionado en state
    function manejarEditar(empleado) {
        navigate(`/basicos/${empleado.id}`, { state: { empleado } });
    }

    function manejarGuardar(empleado) {
        if (modoEdicion) {
            editarEmpleado(empleado);
        } else {
            agregarEmpleado(empleado);
        }
    }

    return (
        <div>
            <h1>Lista de Empleados</h1>

            {modoEdicion ? (
                <FormularioEmpleadoBasico
                    key={id}
                    onGuardar={manejarGuardar}
                />
            ) : (
                <>
                    <FormularioEmpleadoBasico onGuardar={manejarGuardar} />

                    <EmpleadosList
                        empleados={empleados}
                        onEditar={manejarEditar}
                        onEliminar={eliminarEmpleado}
                    />
                </>
            )}
        </div>
    );
}

export default EmpleadosPage;
