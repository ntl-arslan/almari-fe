
export const almariService={
	loginCustomer,
	signupCustomer,
	addToCart,
	getCartItems
}

const almariURL='http://localhost:3020/';

async function loginCustomer(params)
{
	let apiUrl=`${almariURL}user/login`
	const postOptions = {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(
		  params
		),
	  };
	  
	  try {
		const data = await fetchData(apiUrl, postOptions);
		return data;
	  } catch (error) {
		console.error('Error posting data:', error);
	  }
}

async function signupCustomer(params){
	let apiUrl=`${almariURL}user/signup`
	const postOptions = {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(
		  params
		),
	  };
	  
	  try {
		const data = await fetchData(apiUrl, postOptions);
		return data;
	  } catch (error) {
		console.error('Error posting data:', error);
	  }
}

async function addToCart(params){
	let apiUrl=`${almariURL}user/addToCart`
	const postOptions = {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(
		  params
		),
	  };
	  
	  try {
		const data = await fetchData(apiUrl, postOptions);
		return data;
	  } catch (error) {
		console.error('Error posting data:', error);
	  }
}

async function getCartItems(params){
	let apiUrl=`${almariURL}user/getCart/${params}`
	const postOptions = {
		method: 'GET',
		headers: {
		  'Content-Type': 'application/json',
		},
		
	  };
	  
	  try {
		const data = await fetchData(apiUrl, postOptions);
		return data;
	  } catch (error) {
		console.error('Error posting data:', error);
	  }
}

async function fetchData(url, options = {}) {
	try {
	  const response = await fetch(url, options);
  
	  if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	  }
  
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error('Error during fetch:', error);
	  throw error; 
	}
  }