import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const FormInput = ({list, setList, setSearch}) => {

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  
  const agregar= (e)=> {
    e.preventDefault()
    let tamaño= list.length + 1;
    setList([...list, {id: tamaño, nombre: inputName, correo: inputEmail}]);
    setInputName('')
    setInputEmail('')
    setSearch('')
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Form onSubmit={agregar}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre del colaborador</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre del colaborador"
                onChange={(e)=> setInputName(e.target.value)}
                value= {inputName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Correo del colaborador</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa correo del colaborador"
                onChange={(e)=> setInputEmail(e.target.value)}
                value= {inputEmail}
              />
            </Form.Group>
            <Button variant="primary" type="submit" 
            disabled={inputName!=='' && inputEmail!=='' ? false : true}>
              Agregar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormInput;
