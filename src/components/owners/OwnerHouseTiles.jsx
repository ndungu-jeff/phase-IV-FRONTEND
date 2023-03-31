import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components
import HouseDetails from "../clients/HouseDetails";
import DeleteAccount from "../common/DeleteAccount";
import Footer from "../common/Footer";
import CustomTable from "../common/CustomTable";
import NavBar from "./shared/NavBar";

// features
import { selectCurrentOwnerDetail } from "../../features/owners/ownersSlice";
import { setCurrentHouseDetail } from "../../features/houseSlice";

// functions
import { ownerHouses } from "../../api/owner/owner";

// styling mui
import { Typography, Stack, IconButton, Avatar, Box, LinearProgress, Menu, MenuItem, } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";


function OwnerHouseTiles() {
  const currentOwnerDetails = useSelector(selectCurrentOwnerDetail)
  let owner_id = currentOwnerDetails.id
  const caller = "owner"

  const [loading, setLoading] = useState(false);
  const [ownerHouseData, setOwnerHouses] = useState([]);
  const [openHouseDetails, setOpenHouseDetails] = useState(false);
  const [openDeleteAccount, setOpenDeleteAccount] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [rowParams, setRowParams] = useState({});
  
  const fetchOwnerHouses = async () => {
    setLoading(true);
    const payload = await ownerHouses(owner_id)
    setOwnerHouses(payload.data)
    setLoading(false);
  };

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };
  const closeHouseDetails = () => {
    setOpenHouseDetails(false);
  };
  const closeDeleteModal = () => {
    setOpenDeleteAccount(false);
  };
  const handleHouseActionClick = (params) => (event) => {
    setRowParams(params.row)
    setAnchorElNav(event.currentTarget);
    // dispatch(setCurrentHouseDetail({ currentHouseDetail: params.row }))
  }  

  useEffect(() => {
    fetchOwnerHouses();
  }, []);

  const handleMenuItemClick = (prop) => {
    console.log(`${prop} click params`, rowParams);
    handleCloseMenu();
    if (prop === "view") {
      dispatch(setCurrentHouseDetail({ currentHouseDetail: rowParams }));
      setOpenHouseDetails(true);
    } else if (prop === "edit") {
      dispatch(setCurrentHouseDetail({ currentHouseDetail: rowParams }));
      // setOpenHouseEditDialogue(true)
    } else if (prop === "delete") {
      dispatch(setCurrentHouseDetail({ currentHouseDetail: rowParams }));
      // setDeleteHouseDialog(true);
    } else
      handleCloseMenu();
  };

  const ActiveHouseActions = () => {
    return (
      <>
        {" "}
        <HouseDetails
          openHouseDetails={openHouseDetails}
          closeHouseDetails={closeHouseDetails}
          user={caller}
        />{" "}
        {/* <EditHouseDetails
          openHouseEditDialogue={openHouseEditDialogue}
          closeOpenHouseEditDialogue={closeHouseEditDialogue}
        />{" "} */}
        <DeleteAccount
          openDeleteAccount={openDeleteAccount}
          closeDeleteModal={closeDeleteModal}
          house_code={rowParams.code}
          // deactivationStatus={deactivationStatus}
          fetchStays={fetchOwnerHouses}
        />
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
          <MenuItem onClick={() => handleMenuItemClick("edit")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <EditIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Edit
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("delete")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <DeleteIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Delete
            </Box>
          </MenuItem>
        </Menu>{" "}
      </>
    );
  };

  const columns = [
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Avatar sx={{ mr: 2 }} src={params.value} alt={params.value} />
          </>
        );
      },
    },
    {
      field: "name",
      headerName: "Property Name",
      width: 200,

    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "description",
      headerName: "Description",
      width: 500,
    },
    {
      field: "price",
      headerName: "Quoted Price",
      width: 150,
    },    
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <IconButton onClick={handleHouseActionClick(params)}>
            <MoreVertIcon />
          </IconButton>
        );
      },
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
        <Typography>These are the places you own</Typography>
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
        <ActiveHouseActions />
        {loading && <LinearProgress />}
        {!loading && <CustomTable rows={ownerHouseData} columns={columns} />}
      </Box>
      <Footer />
    </>
  );
}

export default OwnerHouseTiles;
