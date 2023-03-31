import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import HouseDetails from "./HouseDetails";
import DeleteAccount from "../common/DeleteAccount";
import Footer from "../common/Footer";
import CustomTable from "../common/CustomTable";
import NavPanel from "./joint/NavPanel";

// features
import { selectCurrentClientDetail } from "../../features/clients/clientSlice";
import { setCurrentHouseDetail } from "../../features/houseSlice";

// functions
import { clientHouses } from "../../api/client/client";


// styling mui
import { Avatar, Stack, Typography, Box, LinearProgress, Menu, MenuItem, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";



function Mystays() {
  const currentClientDetails = useSelector(selectCurrentClientDetail)
  let client_id = currentClientDetails.id
  const caller = "client"

  const [loading, setLoading] = useState(false);
  const [clientsHouses, setClientHouses] = useState([]);
  const [openHouseDetails, setOpenHouseDetails] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [rowParams, setRowParams] = useState({})

  const fetchClientHouses = async () => {
    setLoading(true);
    const payload = await clientHouses(client_id)
    setClientHouses(payload.data.map(entry => entry.house))
    setLoading(false);
  };

  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };
  const closeHouseDetails = () => {
    setOpenHouseDetails(false);
  };
  const handleHouseActionsClick = (params) => (event) => {
    setRowParams(params.row);
    setAnchorElNav(event.currentTarget);
  };

  useEffect(() => {
    fetchClientHouses();
  }, []);

  const handleMenuItemClick = (prop) => {
    console.log(`${prop} click params`, rowParams);
    handleCloseMenu();
    if (prop === "view") {
      dispatch(setCurrentHouseDetail({ currentHouseDetail: rowParams }));
      setOpenHouseDetails(true);
    } else if (prop === "book") {
      dispatch(setCurrentHouseDetail({ currentHouseDetail: rowParams }));
      setOpenHouseDetails(true);
    }else
      handleCloseMenu();
  };

  const ActiveStayActions = () => {
    return (
      <>
        {" "}
        <HouseDetails
          openHouseDetails={openHouseDetails}
          closeHouseDetails={closeHouseDetails}
          user={caller}
        />{" "}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={() => handleMenuItemClick("view")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <VisibilityOutlinedIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              View
            </Box>
          </MenuItem>          
          <MenuItem onClick={() => handleMenuItemClick("book")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <BookOnlineIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Book
            </Box>
          </MenuItem>
        </Menu>{" "}
      </>
    );
  };
  const columns = [
    {
      field: "name",
      headerName: "Property Name",
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
      field: "location",
      headerName: "Location",
      width: 200,

    },
    {
      field: "description",
      headerName: "Description",
      width: 500,
    },
    {
      field: "price",
      headerName: "Asking price(USD)",
      width: 150,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <IconButton onClick={handleHouseActionsClick(params)}>
              <MoreVertIcon />
            </IconButton>
          </>
        )
      },
    },
  ]
  return (
    <>
      <NavPanel user={currentClientDetails}/>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ p: 2 }}
      >
        <Typography sx={{pt: 2}}>These are your previously booked places</Typography>
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
        <ActiveStayActions />
        {loading && <LinearProgress />}
        {!loading && <CustomTable rows={clientsHouses} columns={columns} />}
      </Box>
      <Footer />
    </>
  );
}

export default Mystays;
