import React, { useEffect, useState } from 'react'
import AddToCardComponent from '../../../page-components/AddToCardComponent';
import { almariService } from '../../../services/customer';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export default function Cartitems() {
	const [cartItems,setCartItems]=useState([]);
	useEffect(() => {
		getCartItems();
	}, []);
	
	const getCartItems = async () =>{
		const username=Cookies.get('user');
		// if(!username)
		// {
		// 	window.location.href = 'http://localhost:3000/Login';
		// }
		const response=await almariService.getCartItems(username);
		if(response)
		{
			if(response.status==="SUCCESS"){
				setCartItems(response.data);
			}
			else{
				
			}
		}
		else{
			toast.error("Error fetching cart items")
		}
	}
  return (
   <>
   	<div>
				<AddToCardComponent data={cartItems} />
			</div>
   </>
  )
}
