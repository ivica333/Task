import { useState,useEffect } from 'react'; 
import { getData } from '../services/api'; 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Appbar from './Appbar'; 

function Suppliers() {
    
    const [suppliers,setSuppliers] = useState([])
    const [error,setError] = useState(false)

    useEffect(() => {
        getData("suppliers").then(({data}) => {
          setSuppliers(data)
        }).catch((error => {
          setError(true)
        }))
      },[])

    return (
      <div className="suppliers">
        <Appbar title="Suppliers list"/>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2, ml:3 }} variant="h6" component="div">
            Suppliers
          </Typography>
            <List sx={{ ml:3 }}>
            {error ?  "No data found" :suppliers.map(supplier => (
             <ListItem> 
              <ListItemText 
                primary={supplier.companyName}
              />
             </ListItem> ))}
            </List>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Suppliers;