import React from "react";
import NavPanel from "./joint/NavPanel";
import Preface from "./joint/Preface";
import Footer from "../common/Footer";
import { selectCurrentClientDetail } from "../../features/clients/clientSlice";
import { useSelector } from "react-redux";

function ClientDashboard() {
  return(
  <>
  <NavPanel />
  <Preface/>
  <Footer/>
  </>
  )
}

export default ClientDashboard;
