import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const Search = ({ search, setSearch, list, setNewList }) => {
  const searchList = (e) => {
    e.preventDefault();
    const inputSearchValue = e.target.value;
    setSearch(inputSearchValue);
    //se realiza el filtrado con los caracteres en minusculas
    setNewList(list.filter((c) =>c.nombre.toLowerCase().includes(inputSearchValue.toLowerCase())));
  };

  return (
    <div>
      <div className="conatiner-search">
        <Form onSubmit={searchList}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="title-search" column lg="8">
              <h2>Bucador de Colaboradores</h2>
            </Form.Label>
            <Col className="search" sm="5" md="5" lg="4">
              <Form.Control
                type="text"
                placeholder="Busca un colaborador"
                value={search}
                onChange={searchList}
              />
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Search;
