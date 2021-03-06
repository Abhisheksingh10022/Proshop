import React,{useState,useEffect} from "react";
import {Form,Button,Row,Col} from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import{useLocation,useSearchParams,Link,useNavigate,useParams} from "react-router-dom";
import { ListProductDetails } from "../Actions/ProductActions";
 import { USER_UPDATE_RESET } from "../Constants/userConstants";
import {FormContainer} from '../Components/FormContainer';
import Loader from "../Components/loader";
import Message from "../Components/Message";
  const ProductEditScreen=()=>{

    const {id}=useParams()
    const [name,setName]=useState('');
   const [price,setPrice]=useState(0);
    const[image,setImage]=useState('');
    const[brand,setBrand]=useState('');
    const[category,setCategory]=useState('');
    const[countInStock,setCountInStock]=useState(0);
    const[description,setDescription]=useState('');
    
  
  const dispatch=useDispatch();

  const productDetails=useSelector((state)=>state.productDetails);
  const {loading,error,product}=productDetails;


   const navigate=useNavigate();
   useEffect(()=>{
      
       
   if(!product.name||product._id!==id)
   {
       dispatch(ListProductDetails(id))
   }
   else{
       setName(product.name)
       setPrice(product.email)
       setImage(product.image)
       setBrand(product.brand)
       setCategory(product.category)
       setCountInStock(product.countInStock)
       setDescription(product.description)
   }}
 ,[product,dispatch,id])  
    const submitHandler=(e)=>{
        e.preventDefault();
        
       
    }
    
    return( 
        <>
        <Link to='/admin/productlist' className="btn btn-light my-3">Go Back</Link>
         <FormContainer>
        <h1> Edit product</h1>
       
        {loading?<Loader />:error?<Message variant='danger'>{error}</Message>:(
         <Form onSubmit={submitHandler}>
         <Form.Group controlId="name">
        <Form.Label> Name</Form.Label>
        <Form.Control 
        type='name'
         placeholder='Enter name'
          value={name}
        onChange={(e)=>setName(e.target.value)}
        >
        </Form.Control>
         </Form.Group>
         <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control 
        type='number'
         placeholder='Enter Price'
          value={price}
        onChange={(e)=>setPrice(e.target.value)}
        >
        </Form.Control>
        </Form.Group>

        <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type='text'
         placeholder='Enter image url'
          value={image}
        onChange={(e)=>setImage(e.target.value)}
        >
        </Form.Control>
        </Form.Group>

        <Form.Group controlId="brand">
        <Form.Label>Brand</Form.Label>
        <Form.Control 
        type='text'
         placeholder='Enter Brand'
          value={brand}
        onChange={(e)=>setBrand(e.target.value)}
        >
        </Form.Control>
        </Form.Group>

        <Form.Group controlId="countInStock">
        <Form.Label>Count In Stock</Form.Label>
        <Form.Control 
        type='number'
         placeholder='Enter countInStock'
          value={countInStock}
        onChange={(e)=>setCountInStock(e.target.value)}
        >
        </Form.Control>
        </Form.Group>

        <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control 
        type='text'
         placeholder='Enter Category'
          value={category}
        onChange={(e)=>setCategory(e.target.value)}
        >
        </Form.Control>
        </Form.Group>

        <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control 
        type='text'
         placeholder='Enter Description'
          value={description}
        onChange={(e)=>setDescription(e.target.value)}
        >
        </Form.Control>
        </Form.Group>

      <Button type='submit' varient='primary' className="my-4">
       Update
      </Button>
        </Form> )}  
       </FormContainer>
    </>
    )

}
export  default ProductEditScreen;
