import React, { useEffect, useState } from "react";
// import NavBar from "./shared/NavBar";
import { allHouses } from "../../api/client/client";
import { Typography,Menu, Stack, Avatar, Box, LinearProgress, MenuItem, IconButton} from "@mui/material";
import CustomTable from "../common/CustomTable";
import NavPanel from "./joint/NavPanel";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
import Footer from "../common/Footer";
import HouseDetails from "./HouseDetails";
import DeleteAccount from "../common/DeleteAccount";

import { setCurrentHouseDetail } from "../../features/houseSlice";
import { selectCurrentClientDetail } from "../../features/clients/clientSlice";
import MoreVertIcon from "@mui/icons-material/MoreVert";


function AllHouses() {
  const [loading, setLoading] = useState(false);
  const [housesData, setHousesData] = useState([]);  
  const [openHouseDetails, setOpenHouseDetails] = useState(false);
  const [openDeleteAccount, setOpenDeleteAccount] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [rowParams, setRowParams] = useState({})
  const [rowData, setRowData] = useState([]);
  const user = "client"

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentClientDetails = useSelector(selectCurrentClientDetail)


  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const closeHouseDetails = () => {
    setOpenHouseDetails(false);
  };
  const closeDeleteModal  = () => {
    setOpenDeleteAccount(false);
  };

 
  const handleHouseActionsClick = (params) => (event) => {
    setRowParams(params.row);
    setAnchorElNav(event.currentTarget);
  };
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
          user={user}
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
              <VisibilityOutlinedIcon
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

  const fetchHouses = () => {
    setLoading(true);
    allHouses().then((res) => {
      setHousesData(res.data)
      setLoading(false);
    });    
  };

  useEffect(() => {
    fetchHouses();
  }, []);
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
      width: 80,
      renderCell: (params) => {
        return (
            <IconButton onClick={handleHouseActionsClick(params)}>
              <MoreVertIcon />
            </IconButton>
        );
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
        <Typography>Browse House catalogue below, and click on book to reserve House</Typography>
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
        {loading && <LinearProgress/>}
        {!loading && <CustomTable rows={housesData} columns={columns}/>}
      </Box>
      <Footer  />
    </>
  );
}

export default AllHouses;
