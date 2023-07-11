/* eslint-disable react/prop-types */
// import React from "react";
import { useLocation } from "react-router-dom";

import FormReservas from "../components/FormReservas";
// {menu}

const ReservasPage = () => {
  // const ReservasPage = () => {
  const location = useLocation();
  // const hash2 = location.hash;
  const { hash } = location;

  // console.log(hash + " " + hash2);
  return (
    <>
      <FormReservas menu={hash} />
    </>
  );
};

export default ReservasPage;
