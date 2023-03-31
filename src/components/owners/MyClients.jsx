import React, { useEffect, useState } from "react";
import NavBar from "./shared/NavBar";
import { Typography, Stack, Avatar, Box, LinearProgress } from "@mui/material";
import CustomTable from "../common/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { myClients } from "../../api/owner/owner";
import Footer from "../common/Footer";


import { selectCurrentOwnerDetail } from "../../features/owners/ownersSlice";
function MyClients() {

  const currentOwnerDetails = useSelector(selectCurrentOwnerDetail)
  let owner_id = currentOwnerDetails.id
  const [loading, setLoading] = useState(false);
  const [myClientsData, setMyClientsData] = useState([]);
  
  const fetchMyClients = async () => {
    setLoading(true);
    const payload = await myClients(owner_id)    
    setMyClientsData(payload.data.map( entry => entry.client ))
      setLoading(false);
       
  };



  useEffect(() => {
    fetchMyClients();    
  }, []);
  const columns = [
    {
      field: "full_name",
      headerName: "Full Name",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Avatar sx={{ mr: 2 }} src={params.value} alt={params.value} />
            {params.value}
          </>
        );
      },
    },
    {
      field: "username",
      headerName: "Username",
      width: 250,
    },
    {
      field: "phone_number",
      headerName: "Telephone",
      width: 250,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
  ]
  return (
    <>
      <NavBar user={currentOwnerDetails}/>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ p: 2 }}
      >
        <Typography>These are your Clients</Typography>
      </Stack>
      <Box
        sx={{
          mt: 5,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "primary.lightest_gray",
            fontSize: 16,
          },
        }}
      >
        {loading && <LinearProgress/>}
        {!loading && <CustomTable rows={myClientsData} columns={columns}/>}
      </Box>
      <Footer />
    </>
  );
}

export default MyClients;
