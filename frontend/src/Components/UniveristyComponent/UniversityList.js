import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AiOutlineDelete } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";
import { TablePagination } from "@mui/material";
import AddUniversityModal from "./FormModal/AddUniversityModal";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const UniversityList = ({ university }) => {
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [addUniversity, setAddUniversity] = useState(false);
  const [page, setPage] = useState(0);

  // pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  // Delete university

  const deleteUniversity = (id) => {
    axios.delete(`http://localhost:3000/api/v1/university/${id}`).then((res) => {
      toast.success("University deleted");
      setTimeout(() => {
        window.location.reload(true)
      }, 2000)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="">
      <div className="flex items-center justify-between font-poppins tracking-wide">
        <TablePagination
          rowsPerPageOptions={[20, 25, 100]}
          component="div"
          count={university && university.findUni && university.findUni.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <div className="w-fit">
          <button className="w-32 font-poppins text-sm p-2 bg-primary-blue hover:bg-primary-lightblue rounded-md text-white tracking-wide" onClick={() => setAddUniversity(true)}>Add University</button>
        </div>
      </div>
      <TableContainer>
        <Table
          aria-label="simple table"
          className="font-poppins font-normal text-base "
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F4F4F4" }}>
              <TableCell className="font-poppins text-sm font-bold">
                S.N
              </TableCell>
              <TableCell className="font-poppins text-sm font-bold"
                align="left">
                University Name
              </TableCell>
              <TableCell className="font-poppins text-sm font-bold"
                align="center">
                Country
              </TableCell>
              <TableCell
                align="center" className="font-poppins text-sm font-bold">
                Location
              </TableCell>
              <TableCell className="font-poppins text-sm font-bold"
                align="center">
                University Information
              </TableCell>
              <TableCell className="font-poppins text-sm font-bold"
                align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {university &&
              university.findUni &&
              university.findUni
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((table, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="font-poppins text-sm"
                    >
                      <div className="flex items-center gap-5">
                        {index + 1}
                      </div>
                    </TableCell>
                    <TableCell
                      align="left"
                      className="font-poppins text-sm"
                    >
                      <Link to={`/universitydetail/${table._id}`}><div className='flex items-center gap-4 hover:text-primary-blue'> <p>{table.universityName}</p></div></Link>


                      <p className="font-poppins text-xs">Established:{table.established}</p>
                    </TableCell>
                    <TableCell
                      align="center"
                      className="font-poppins text-sm"
                    >
                      <p>{table.country} </p>
                    </TableCell>
                    <TableCell
                      align="center"
                      className="font-poppins text-sm"
                    >
                      {table.location}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="font-poppins text-sm"
                    >
                      <p className="">
                        {table.universityType}
                      </p>
                      <a href={`https://${table.universityLink}`} target="_blank"><p className="flex items-center text-primary-blue justify-center gap-2">
                        <BiLinkExternal />University Website
                      </p></a>
                    </TableCell>
                    <TableCell
                      align="center"
                      className="font-poppins text-lg"
                    >
                      <p onClick={() => deleteUniversity(table._id)} className="w-full flex justify-center cursor-pointer hover:text-red-500"><AiOutlineDelete /></p>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add University */}
      {
        addUniversity &&
        <AddUniversityModal setAddUniversity={setAddUniversity} />
      }
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default UniversityList;
