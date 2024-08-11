import React, { useState } from 'react';
import Image from 'next/image';
import PrimaryModal from './productDetailModal';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { almariService } from '../services/customer';

export default function CardComponent({ data }) {
  const initialState = {
    TITLE: "",
    IMAGE: "",
    PRICE: "",
    DESCRIPTION: ""
  };
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productDetails, setProductDetails] = useState(initialState);

  const viewProductDetails = (title, description, price, image) => {
    setProductDetailModal(true);
    setProductDetails({
      TITLE: title,
      IMAGE: image,
      PRICE: price,
      DESCRIPTION: description
    });
  };

  const handleCloseModal = () => {
    setProductDetailModal(false);
  };

  const handlePredict = async () => {
    console.log(productDetails.IMAGE);
    const payload = { image_url: productDetails.IMAGE };
    const response = await almariService.predictModel(payload);
    if (response) {
      console.log(response);
    }
  };

  const handleAddToCart = async () => {
    const username = Cookies.get('user');
    const payload = {
      TITLE: productDetails?.TITLE,
      PRICE: productDetails?.PRICE,
      IMAGE: productDetails?.IMAGE,
      ITEMLINK: productDetails?.ITEMLINK,
      DESCRIPTION: productDetails?.DESCRIPTION,
      SKUCODE: productDetails?.SKUCODE,
      USERNAME: username
    };

    const response = await almariService.addToCart(payload);
    if (response) {
      if (response.status === "SUCCESS") {
        toast.success("Added to cart");
        setProductDetailModal(false);
        window.location.reload();
        return;
      } else {
        toast.error("Something went wrong");
        return;
      }
    }
  };

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {data.map((item, index) => (
          <div key={index} className="card m-3" style={{ width: '18rem', height: '25rem' }}>
            <div className="card-img-top">
              <Image src={item.image} alt={item.title} width={200} height={200} />
            </div>
            <div className="card-body">
              <h5 className="card-title">Price: PKR {item.price}</h5>
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={() => viewProductDetails(item.title, item.description, item.price, item.image)}
              >
                View Item
              </button>
            </div>
          </div>
        ))}
      </div>

      <PrimaryModal isOpenProp={productDetailModal}>
  <section className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 border rounded p-3">
        <div className="row">
          <div className="col-md-5 text-center">
            <Image src={productDetails.IMAGE} alt={"productImage"} width={500} height={500} />
          </div>
          <div className="col-md-7">
            <h4 className="mb-2">{productDetails.TITLE}</h4>
            <div className="mb-2">
              <p className="text-muted text-truncate">{productDetails.DESCRIPTION}</p>
            </div>
            <div className="mb-3">
              <h5 className="text-primary">PKR. {productDetails.PRICE}</h5>
            </div>
            <div className="d-flex flex-column gap-2">
              <button onClick={handleAddToCart} className="btn btn-success btn-sm">
                <i className="bi bi-cart-fill me-2"></i>Buy now
              </button>
              <button onClick={handleCloseModal} className="btn btn-secondary btn-sm">
                Close
              </button>
              <button onClick={handlePredict} className="btn btn-warning btn-sm">
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</PrimaryModal>

    </>
  );
}
