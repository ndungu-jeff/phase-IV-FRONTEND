import React, { useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import PreventRowOverlay from "./PreventRowOverLay";
import { useEffect } from "react";

const CustomTable = ({ rows, columns }) => {
  const [pageSize, setPageSize] = useState(5);
  

  return (
    <>
      <Box
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "primary.lightest_gray",
            fontSize: 16,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row.id}
          rows={rows}
          columns={columns}
          autoHeight
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
          onPageSizeChange={(newValue) => setPageSize(newValue)}
          components={{
            NoRowsOverlay: PreventRowOverlay,         
          }}
        />
      </Box>
    </>
  );
};
export default CustomTable;
