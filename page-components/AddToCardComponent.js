import React,{useEffect,useState} from 'react'
import Image from 'next/image';
import PrimaryModal from '../page-components/productDetailModal';
import Cookies from 'js-cookie';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { almariService } from '../services/customer';

const AddToCardComponent = ({ data }) => {
    const initialState = {
        ID:'',
        TITLE: '',
        IMAGE: '',
        PRICE: '',
        DESCRIPTION: '',
      };
      const [productDetailModal, setProductDetailModal] = useState(false);
      const [showReceiptModal, setShowReceiptlModal] = useState(false);
      const [productDetails, setProductDetails] = useState(initialState);
      const [totalAmount, setTotalAmount] = useState(0);
    
      const viewProductDetails = (id, title, description, price, image) => {
        setProductDetailModal(true);
        setProductDetails({
          ID:id,
          TITLE: title,
          IMAGE: image,
          PRICE: price,
          DESCRIPTION: description,
        });
      };
    
      const handleCloseModal = () => {
        setProductDetailModal(false);
      };
    
      const handleCloseRecieptModal = () => {
        setShowReceiptlModal(false);
      };
    
      const removeFromCart = async () => {
      {
        try{
          const deleteRes=await almariService.deleteFromCart(+productDetails.ID);
          if(deleteRes)
          {
            if(deleteRes.status==="SUCCESS"){
              toast.success(deleteRes.message);
              window.location.reload()
              handleCloseModal(false);
            }
            else{
              toast.error(deleteRes.message)
            }
          }
        }
        catch(error)
        {
          console.log(error)
        }
      }
      }
    
      const placeOrder = async () => {
        toast.success("Order Has Been Placed Successfully.");
        setShowReceiptlModal(false);
      };
    
      useEffect(() => {
            calculateTotalAmount();
        }, []);
    
      const calculateTotalAmount = async () => {
        let amount = 0;
      
        if(data.length>0)
        {
          for (let i = 0; i < data.length; i++) {
            const priceWithoutCommas = data[i]['PRICE'].replace(/,/g, '');
            amount+=parseFloat(priceWithoutCommas)
        
          }
        }
        setTotalAmount(amount);
      }
    
      const handleShowReceipt = () => {
        setShowReceiptlModal(true);
      };
  return (
   <>
   {data.length > 0 ? (
  <div>
    <div className="d-flex flex-wrap justify-content-center">
      {data.map((item, index) => (
        <div key={index} className="card m-3" style={{ width: '18rem', height: '22rem' }}>
          <div className="card-img-top d-flex justify-content-center align-items-center" style={{ height: '200px', overflow: 'hidden' }}>
            <img src={item.IMAGE} alt={item.TITLE} className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%' }} />
          </div>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title mt-auto">Price: PKR {item.PRICE}</h5>
            <button
              className="btn btn-success mt-2"
              onClick={() => viewProductDetails(item.ID, item.TITLE, item.DESCRIPTION, item.PRICE, item.IMAGE)}
            >
              View Item
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-info mt-2" onClick={handleShowReceipt}>
        <a href="#" style={{ color: "white", fontSize: '22px' }}>Proceed To The Receipt</a>
      </button>
    </div>
  </div>
) : (
  <div>
    <div className="d-flex justify-content-center mb-5">
      <h4 className="text-danger">No Items In Cart Found</h4>
    </div>
    <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-primary mb-5"   style={{
                          backgroundColor: "#ff6219",
                          borderColor: "#ff6219",
                        }} >
        <a href="/Home" >Back to Home Page</a>
      </button> 
   
    </div>
  </div>
)}

<PrimaryModal isOpenProp={productDetailModal}>
  <section className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-md-10 border border-secondary rounded-lg p-4">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={productDetails.IMAGE} alt="productImage" className="img-fluid" style={{ maxHeight: '400px', maxWidth: '100%' }} />
          </div>
          <div className="col-md-6">
            <h2 className="font-weight-bold">{productDetails.TITLE}</h2>
            <p className="text-muted">{productDetails.DESCRIPTION}</p>
            <p className="h3 font-weight-bold">PKR. {productDetails.PRICE}</p>
            <div className="mt-4 d-flex">
              <button type="button" onClick={removeFromCart} className="btn btn-danger mr-2">Remove From Cart</button>
              <button type="button" onClick={handleCloseModal} className="btn btn-outline-dark">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</PrimaryModal>

<PrimaryModal isOpenProp={showReceiptModal}>
  <div className="container">
    <div className="bg-secondary text-white text-center py-3 mb-4">
      <h3 className="font-weight-bold">Receipt</h3>
    </div>
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{item.TITLE}</h5>
              <p className="card-text font-weight-bold">Price: PKR {item.PRICE}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="row">
      <h5>Total Amount: PKR. {totalAmount}</h5>
    </div>
    <div className="d-flex justify-content-center mt-4">
      <button type="button" className="btn btn-outline-dark mr-2" onClick={handleCloseRecieptModal}>Cancel</button>
      <button type="button" className="btn btn-success" onClick={placeOrder}>Place Order</button>
    </div>
  </div>
</PrimaryModal>

   </>
  )
}

export default AddToCardComponent