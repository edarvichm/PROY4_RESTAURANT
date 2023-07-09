/* eslint-disable react/prop-types */
// import React from "react";

import FormReservas from "../components/FormReservas";
// {menu}

const ReservasPage = ({ menu }) => {
  // const ReservasPage = () => {
  return (
    <>
      <FormReservas tipo={menu} />
    </>
  );
};

export default ReservasPage;
