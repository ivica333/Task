import Appbar from './Appbar'; 
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../styles/home.css';

function HomePage() {

    return (
      <div className="home">
       <Appbar title="Home"/>
        <div className="buttons">
         <Grid container spacing={1} direction="row" justifyContent="center">
          <Grid item sm={4} md={2}>
           <Button variant="contained" size="large">
            <Link className="link" to="/products">See all products</Link>
           </Button>
          </Grid>
          <Grid item sm={4} md={2}>
           <Button variant="contained" size="large">
            <Link className="link" to="/orders">See all orders</Link>
           </Button>
          </Grid>
          <Grid item sm={4} md={2}>
           <Button variant="contained"  size="large">
            <Link className="link" to="/suppliers">See all suppliers</Link>
           </Button>
          </Grid>
         </Grid>
         </div>  
      </div>
    );
  }
  
  export default HomePage;