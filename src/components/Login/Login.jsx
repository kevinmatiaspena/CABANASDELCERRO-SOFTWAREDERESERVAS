import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"

function Login() {
  return (
    <Form className='form-conteiner' style={{}} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingresar Correo" />
        <Form.Text className="text-muted">
          No te olvides de ingresar el correo
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresar Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordar" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{display:'flex',marginLeft:'200px'}}>
        Ingresar
      </Button>
    </Form>
  );
}

export default Login;