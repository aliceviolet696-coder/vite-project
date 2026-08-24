import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function FormularioEmpleado({ empleados, onGuardar, onCancelar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const empleadoRecuperado =
    location.state?.empleado ||
    empleados?.find((e) => e.id === Number(params.id)) ||
    null;

  const [nombre, setNombre] = useState(empleadoRecuperado?.nombre || '');
  const [departamento, setDepartamento] = useState(
    empleadoRecuperado?.departamento || ''
  );
  const [edad, setEdad] = useState(empleadoRecuperado?.edad ?? '');
  const [turno, setTurno] = useState(empleadoRecuperado?.turn || 'mañana');
  const [activo, setActivo] = useState(Boolean(empleadoRecuperado?.activo));
  const [fechaIngreso, setFechaIngreso] = useState(
    empleadoRecuperado?.fechaIngreso || ''
  );
  const [correo, setCorreo] = useState(empleadoRecuperado?.correo || '');
  const [salario, setSalario] = useState(empleadoRecuperado?.salario ?? '');

  function manejarGuardar(e) {
    e.preventDefault();
    const empleado = {
      id:
        empleadoRecuperado !== null && empleadoRecuperado !== undefined
          ? empleadoRecuperado.id
          : Date.now(),
      nombre,
      departamento,
      edad: Number(edad),
      turn: turno,
      activo,
      fechaIngreso,
      correo,
      salario: Number(salario),
    };
    onGuardar(empleado);
    navigate('/empleados');
  }

  function manejarCancelar() {
    if (onCancelar) {
      onCancelar();
    }
    navigate('/empleados');
  }

  return (
    <form className="formulario-empleado" onSubmit={manejarGuardar}>
      <h1>{empleadoRecuperado ? 'Editar Empleado' : 'Nuevo Empleado'}</h1>

      <div className="campo">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="departamento">Departamento:</label>
        <select
          id="departamento"
          value={departamento}
          onChange={(e) => setDepartamento(e.target.value)}
        >
          <option value="">Seleccione...</option>
          <option value="tecnología">Tecnología</option>
          <option value="recursos humanos">Recursos Humanos</option>
          <option value="contabilidad">Contabilidad</option>
          <option value="administración">Administración</option>
          <option value="marketing">Marketing</option>
          <option value="ventas">Ventas</option>
          <option value="desarrollo">Desarrollo</option>
          <option value="diseño">Diseño</option>
        </select>
      </div>

      <div className="campo">
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

      <div className="campo">
        <label htmlFor="salario">Salario:</label>
        <input
          type="number"
          id="salario"
          min="0"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="fechaIngreso">Fecha de ingreso:</label>
        <input
          type="date"
          id="fechaIngreso"
          value={fechaIngreso}
          onChange={(e) => setFechaIngreso(e.target.value)}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
      </div>

      <p>
        Turnos:
        <label>
          <input
            type="radio"
            name="turno"
            value="mañana"
            checked={turno === 'mañana'}
            onChange={(e) => setTurno(e.target.value)}
          />
          mañana
        </label>
        <label>
          <input
            type="radio"
            name="turno"
            value="tarde"
            checked={turno === 'tarde'}
            onChange={(e) => setTurno(e.target.value)}
          />
          tarde
        </label>
        <label>
          <input
            type="radio"
            name="turno"
            value="noche"
            checked={turno === 'noche'}
            onChange={(e) => setTurno(e.target.value)}
          />
          noche
        </label>
      </p>

      <label>
        Estado:{' '}
        <input
          type="checkbox"
          checked={activo}
          onChange={(e) => setActivo(e.target.checked)}
        />{' '}
        {activo ? 'Activo' : 'Inactivo'}
      </label>

      <div className="botones">
        <button type="submit" className="btn-guardar">
          Guardar
        </button>
        <button type="button" className="btn-cancelar" onClick={manejarCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default FormularioEmpleado;
