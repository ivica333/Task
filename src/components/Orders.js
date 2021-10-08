import { useState,useEffect } from 'react'; 
import { getData } from '../services/api'; 
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Appbar from './Appbar'; 

function Orders() {
    
    const [orders,setOrders] = useState([])
    const [products,setProducts] = useState([])
    const [suppliers,setSuppliers] = useState([])
    const [categories,setCateories] = useState([])
    const [error,setError] = useState(false)
    
    const getOrder = (id) => {
      let result
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].details[0].productId === id) {
          result = orders[i].id
          break
        }
      }
      return result
    }

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

    const getCategoryName = (id) => {
      let result
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].id === id) {
          result = categories[i].name
          break
        } 
      }
      return result
    }

    useEffect(() => {
      getData("orders").then(({data}) => {
        setOrders(data.orders)
        setProducts(data.products)
        setSuppliers(data.suppliers)
        setCateories(data.categories)
      }).catch((error => {
        setError(true)
      }))
    },[])

    return (
      <div className="orders">
        <Appbar title="Orders list"/>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Table sx={{ minWidth: 650 , mt:3 }} aria-label="simple table">
              <TableHead>
               <TableRow>
                 <TableCell sx={{ fontWeight: "bold", fontSize:18 }}>Order ID</TableCell>
                 <TableCell sx={{ fontWeight: "bold", fontSize:18 }} align="right">Product</TableCell>
                 <TableCell sx={{ fontWeight: "bold", fontSize:18 }} align="right">Supplier</TableCell>
                 <TableCell sx={{ fontWeight: "bold", fontSize:18 }} align="right">Category</TableCell>
               </TableRow>
              </TableHead>
             <TableBody>
              {error ? "No data to display" : products.map((product) => (
               <TableRow key={product.id}>
                <TableCell component="th" scope="row">{getOrder(product.id)}</TableCell>
                <TableCell align="right">{product.name}</TableCell>
                <TableCell align="right">{getSupplierName(product.supplierId)}</TableCell>
                <TableCell align="right">{getCategoryName(product.categoryId)}</TableCell>
               </TableRow>
               ))}
             </TableBody>
            </Table>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Orders;