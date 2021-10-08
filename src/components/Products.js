import { useState,useEffect } from 'react'; 
import { getData } from '../services/api'; 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Appbar from './Appbar'; 

function Products() {
  
  const [products,setProducts] = useState([])
  const [suppliers,setSuppliers] = useState([])
  const [error,setError] = useState(false)
  
  const getSupplierName = (id) => {
    let result
    for (let i = 0; i < suppliers.length; i++) {
      if (suppliers[i].id === id) {
        result = suppliers[i].companyName
        break
      } 
    }
    return result
  }

  useEffect(() => {
    getData("products").then(({data}) => {
      setProducts(data.products);
      setSuppliers(data.suppliers)
      console.log(data);
    }).catch((error => {
      setError(true)
    }))
  },[])

  return (
    <div className="App">
      <Appbar title="Products list"/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2, ml:3 }} variant="h6" component="div">
            Products & Suppliers
          </Typography>
            <List sx={{ ml:3 }}>
            {error ? "No data to display" : products.map(product => (
             <ListItem> 
              <ListItemText 
                primary={`Product - ${product.name}`}
                secondary={`Supplier - ${getSupplierName(product.id)}`}/>
             </ListItem> ))}
            </List>
          </Grid>
        </Grid>
    </div>
  );
}

export default Products;