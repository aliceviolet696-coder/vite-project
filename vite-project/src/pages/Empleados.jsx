import { useNavigate } from 'react-router-dom';
import './Empleados.css';

function Empleados({ empleados, onEliminar }) {
    const navigate = useNavigate();


    function manejarEditar(empleado) {
        navigate(`/editar/${empleado.id}`, { state: { empleado: empleado } });
    }




    return (
        <div className="empleados-container">

            <div className="empleados-header">
                <div>
                    <h1>Empleados</h1>
                    <p>Gestión y registros de empleados</p>
                </div>

                <div className="total-empleados">
                    <span>Total</span>
                    <strong>{empleados.length}</strong>
                </div>

                <button
                    className="btn-nuevo"
                    onClick={() => navigate('/nuevo')}
                >
                    + Nuevo Empleado
                </button>
            </div>

            <div className="tabla-container">
                <table className="tabla-empleados">

                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Puesto</th>
                            <th>Salario</th>
                            <th>Edad</th>
                            <th>Fecha Ingreso</th>
                            <th>Departamento</th>
                            <th>Correo</th>
                            <th>Turno</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {empleados.map(empleado => (
                            <tr key={empleado.id}>

                                <td>
                                    <strong>{empleado.nombre}</strong>
                                </td>

                                <td>
                                    {empleado.puesto}
                                </td>

                                <td className="salario">
                                    ${empleado.salario.toLocaleString()}
                                </td>

                                <td>
                                    {empleado.edad}
                                </td>

                                <td>
                                    {empleado.fechaIngreso}
                                </td>

                                <td>
                                    {empleado.departamento}
                                </td>

                                <td className="correo">
                                    {empleado.correo}
                                </td>

                                <td>
                                    <span className="turno">
                                        {empleado.turn}
                                    </span>
                                </td>

                                <td>
                                    <span
                                        className={
                                            empleado.activo
                                                ? "estado activo"
                                                : "estado inactivo"
                                        }
                                    >
                                        {empleado.activo
                                            ? "Activo"
                                            : "Inactivo"}
                                    </span>
                                </td>

                                <td className="acciones">

                                    <button
                                        className="btn-editar"
                                        onClick={() => manejarEditar(empleado)}
                                    >
                                        Editar
                                    </button>

                                    <button
                                        className="btn-eliminar"
                                        onClick={() =>
                                            onEliminar(empleado.id)
                                        }
                                    >
                                        Eliminar
                                    </button>

                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );
}

export default Empleados;