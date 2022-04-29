import React, { useEffect } from "react";
import Link from "next/link";
import { HiOutlineExclamation } from "react-icons/hi";

import { useStateContext } from "../context/StateContext";
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);
  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <HiOutlineExclamation size={150} />
        </p>
        <h2>Transaction was canceled by user. Please try again!</h2>
        <p className="description">
          If you have any questions, please send me an email{" "}
          <a href="mailto:order@magicshop.com" className="email">
            order@magicshop.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
