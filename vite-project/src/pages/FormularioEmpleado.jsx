import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



function formularioEmpleado({ onAgregar,onCancelar }) {


const location = useLocation();
const navigate = useNavigate();


const empleadoRecuperado = location.state?.empleado || null;


    const [nombre, setNombre] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [edad, setEdad] = useState('');
    const [turno, setTurno] = useState('mañana');
    const [activo, setActivo] = useState(true);
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [correo, setCorreo] = useState('');
    const [salario, setSalario] = useState('');




    useEffect(() => {
        if (empleadoRecuperado) {
            setNombre(empleadoRecuperado.nombre);
            setDepartamento(empleadoRecuperado.departamento);
            setEdad(empleadoRecuperado.edad);
            setTurno(empleadoRecuperado.turno);
            setActivo(empleadoRecuperado.activo);
            setFechaIngreso(empleadoRecuperado.fechaIngreso);
            setCorreo(empleadoRecuperado.correo);
            setSalario(empleadoRecuperado.salario);
        }else {
            setNombre('');
            setDepartamento('');
            setEdad('');
            setTurno('mañana');
            setActivo(true);
            setFechaIngreso('');
            setCorreo('');
            setSalario('');
        }
    }, [empleadoRecuperado]);

    function manejarGuardar() {
        const empleado = {
            id: empleadoRecuperado !== null && empleadoRecuperado !== undefined ? empleadoRecuperado.id : Date.now(),
            nombre: nombre,
            departamento: departamento,
            edad: edad,
            turno: turno,
            activo: activo,
            fechaIngreso: fechaIngreso,
            correo: correo,
            salario: salario
        }
        onGuardar(empleado)
        navigate('/empleados');
    }
 function manejarCancelar() {
        onCancelar();
        navigate('/empleados');
    }






    return (
        <div>
            <label htmlFor="nombre">Nombre:</label>
            <input 
            type="text" id="nombre" name="nombre" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            /> 


            <label>
                select Departamento:
                <select 
                
                value = {departamento}
                onChange={(e) => setDepartamento(e.target.value)}>




                    <option value="tecnología">Tecnología</option>
                    <option value="recursos humanos">Recursos Humanos</option>
                    <option value="contabilidad">Contabilidad</option>
                    <option value="administración">Administración</option>
                    <option value="marketing">Marketing</option>
                    
                </select>
                    



            </label>
              <p>
        turnos:
        <label>
          <input type="radio"  value="mañana" checked = {turno === 'mañana'}
          enChange={(e) => setTurno(e.target.value)}
          />
          mañana
        </label>
        <label>
          <input type="radio"  value="tarde" checked = {turno === 'tarde'}
           enChange={(e) => setTurno(e.target.value)}
          />
          tarde
        </label>
        <label>
          <input type="radio"  value="noche" checked = {turno === 'noche'}
           enChange={(e) => setTurno(e.target.value)}
          />
          noche
        </label>
      </p>


      <label>
        Estado: <input type="checkbox" checked={activo} onChange={(e) => setActivo(e.target.checked)} />
      </label>





         
        </div>
    );
}


export default formularioEmpleado;