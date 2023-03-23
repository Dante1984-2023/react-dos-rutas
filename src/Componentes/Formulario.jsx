import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
  return (
<>
        <hr></hr>
    <div className="container fluid m-5 fondo">
        <h1 className='m5 text-center'>Formulario</h1>
        <hr></hr>

       

       </div>

<div className='section m-5 '>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='mb-3 text-center'>       {/* al boton le agregamos un div y un whidt */}
      <Button className='w-50' variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </div>
    </>
  );
}

export default Formulario;