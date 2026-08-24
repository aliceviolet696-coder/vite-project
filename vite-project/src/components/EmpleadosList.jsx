function EmpleadosList({ empleados, onEditar, onEliminar }) {
    return (
        <div>
            <h2>Lista de Empleados</h2>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Departamento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {empleados.map((empleado) => (
                        <tr key={empleado.id}>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.edad}</td>
                            <td>{empleado.departamento}</td>
                            <td>
                                <button onClick={() => onEditar(empleado)}>
                                    Editar
                                </button>
                                <button onClick={() => onEliminar(empleado.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmpleadosList;
