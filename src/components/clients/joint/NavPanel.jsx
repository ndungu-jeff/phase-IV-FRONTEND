import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import DeleteAccount from "../../common/DeleteAccount";
import AccountDetail from "../../common/account/AccountDetail";
import EditClientAccountDetail from "../../common/account/EditClientAccountDetail";

import { Menu,  Avatar, Box, MenuItem} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LogoutIcon from '@mui/icons-material/Logout';

import { setCurrentClientDetail } from "../../../features/clients/clientSlice";

import { logOut } from "../../../api/owner/owner";

function NavPanel({ user }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openAccountDetail, setOpenAccountDetail] = useState(false);
  const [openEditAccountDetail, setOpenEditAccountDetail] = useState(false);
  const [openDeleteAccount, setOpenDeleteAccount] = useState(false);

  const navigate = useNavigate()

  const handleAccountActions = (event) => {
    setAnchorElNav(event.currentTarget);
  }
  const closeAccountDetail = () => {
    setOpenAccountDetail(false);
  };
  const closeEditAccountDetail = () => {
    setOpenEditAccountDetail(false);
  };
  const closeDeleteModal = () => {
    setOpenDeleteAccount(false);
  };
  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };
  const handleMenuItemClick = (prop) => {
    handleCloseMenu();
    if (prop === "view") {
      setOpenAccountDetail(true);
    } else if (prop === "edit") {
      setOpenEditAccountDetail(true);
    }else if (prop === "logout"){
      console.log("logout");
      logOut().then((res) => {
        setCurrentClientDetail(null)
        navigate("/")
      })
      handleCloseMenu();
    } else
    handleCloseMenu();
  };

  const AccountActions = () => {
    return (
      <>
        {" "}
        <AccountDetail
          openAccountDetail={openAccountDetail}
          closeAccountDetail={closeAccountDetail}
          user={user}
        />{" "}
        <EditClientAccountDetail
          openEditAccountDetail={openEditAccountDetail}
          closeEditAccountDetail={closeEditAccountDetail}
          setOpenEditAccountDetail={setOpenEditAccountDetail}
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
              View Account Details
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
              Edit Account Details
            </Box>
          </MenuItem>

          <MenuItem onClick={() => handleMenuItemClick("logout")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <LogoutIcon
                sx={{
                  color: `red`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Log Out
            </Box>
          </MenuItem>
        </Menu>{" "}
      </>
    );
  };

  return (
    <>
      <nav className=" px-2 sm:px-4 py-2.5 bg-[#005163] fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <AccountActions />
        <div className="container flex flex-wrap items-center justify-between mx-auto">

          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Happy Stays
          </span>

          <div className="flex md:order-2">
            <Avatar sx={{ mr: 2 }}
            />
            <button onClick={handleAccountActions} className="text-white">{user.username}</button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/client/dashboard"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/client/listings"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  All Listings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/client/stays"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  My Stays
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>





    </>
  );
}
export default NavPanel