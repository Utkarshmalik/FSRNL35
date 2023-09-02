import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../../Components/Header/Header';
import { useMovieCreateHook } from '../../Hooks/useMovieCreateHook';

function MovieCreationPage() {

    const {movieDetails, setMovieDetails, onCreateMovie, error, message} = useMovieCreateHook();

  return (
    <div>
         <Header/>
     <div className='bg-dark vh-100 text-light d-flex justify-content-center align-items-center flex-column'>
        <h1 className='m-3'> Add a movie </h1>
    <Form onSubmit={onCreateMovie}>
      <Form.Group className="mb-3">
        <Form.Label>Name </Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,name:e.target.value})}} 
        value={movieDetails.name} type="text" placeholder="Enter Name" />
      </Form.Group>

          <Form.Group className="mb-3">
        <Form.Label>Description </Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,description:e.target.value})}}
         value={movieDetails.description} type="text" placeholder="Enter Description" />
      </Form.Group>

          <Form.Group className="mb-3">
        <Form.Label>TrailerUrl </Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,trailerUrl:e.target.value})}}
         value={movieDetails.trailerUrl} type="text" placeholder="Enter Url" />
      </Form.Group>


          <Form.Group className="mb-3">
        <Form.Label>PosterUrl </Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,posterUrl:e.target.value})}}
         value={movieDetails.posterUrl} type="text" placeholder="Enter Url" />
      </Form.Group>

         <Form.Group className="mb-3">
        <Form.Label>Language </Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,language:e.target.value})}}
         value={movieDetails.language} type="text" placeholder="Enter Language" />
      </Form.Group>

         <Form.Group className="mb-3">
        <Form.Label>Release Status </Form.Label>
        <Form.Control   onChange={(e)=>{setMovieDetails({...movieDetails,releaseStatus:e.target.value})}}
         value={movieDetails.releaseStatus} type="text" placeholder="Enter status" />
      </Form.Group>

          <Form.Group className="mb-3">
        <Form.Label>Release Date </Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,releaseDate:e.target.value})}}
         value={movieDetails.releaseDate} type="text" placeholder="Enter date" />
      </Form.Group>

          <Form.Group className="mb-3">
        <Form.Label>Director </Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,director:e.target.value})}}
         value={movieDetails.director}  type="text" placeholder="Enter director" />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>

      
      <p className='text-danger m-3'> {error} </p>
      <p className='text-success m-3'> {message} </p>

    </Form>
     </div>
        
    </div>
       
  );
}



export default MovieCreationPage;