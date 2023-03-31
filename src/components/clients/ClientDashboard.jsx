import React from "react";
import NavPanel from "./joint/NavPanel";
import Preface from "./joint/Preface";
import Footer from "../common/Footer";
import { selectCurrentClientDetail } from "../../features/clients/clientSlice";
import { useSelector } from "react-redux";

function ClientDashboard() {
  const currentClientDetails = useSelector(selectCurrentClientDetail)  
  return(
  <>
  <NavPanel user={currentClientDetails}/>
  <Preface/>
  <Footer/>
  </>
  )
}

export default ClientDashboard;
