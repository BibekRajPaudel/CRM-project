import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ImBin } from "react-icons/im";
import { BiPencil } from "react-icons/bi";
import axios from "axios";
const ClassPages = ({ rowsPerPage, page }) => {
  const [classtest, setClassTest] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/class").then((res) => {
      setClassTest(res.data);
      console.log("Pwan", res.data);
    });
  }, []);
  return (
    <div className="w-full ">
      <TableContainer className=''>
        <Table
          aria-label="simple table"
          className="font-Poppins text-sm w-full"
        >
          <TableHead >
            <TableRow sx={{ backgroundColor: "#F4F4F4" }}>
              <TableCell
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className=""
                style={{ fontSize: "16px", LineHeight: "24px" }}
              >
                S.N
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
               
                style={{ fontSize: "16px", LineHeight: "24px" }}
              >
              <div className='w-[120px] '> Student Name</div> 
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className=" text-base w-[100px] "
                style={{ fontSiex: "16px", LineHeight: "24px" }}
              >
                Name
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className="
                 text-base w-[150px]"
                style={{ fontSiex: "16px", LineHeight: "24px" }}
              >
                Start Time
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className=" text-base w-[125px]"
                style={{ fontSiex: "16px", LineHeight: "24px" }}
              >
                End Time
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className=" text-base w-[160px]"
                style={{ fontSiex: "16px", LineHeight: "24px" }}
              >
                Start Date
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className=" text-base w-[140px]"
                style={{ fontSiex: "16px", LineHeight: "24px" }}
              >
                End Date
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className=" text-base w-[120px]"
                style={{ fontSiex: "16px", LineHeight: "24px" }}
              >
                Period
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className=" text-base w-[120px]"
                style={{ fontSiex: "16px", LineHeight: "24px" }}
              >
                Teacher
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className=" text-base w-[120px]"
                style={{ fontSiex: "16px", LineHeight: "24px" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {classtest &&
              classtest.getAllClasses &&
              classtest.getAllClasses
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((table, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                      }}
                    >
                      <div className="flex items-center gap-5 font-semibold">
                        {index + 1}
                      </div>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                      }}
                    >
                      <div className="flex items-center w-[120px] hover:text-primary-blue">
                        {table.studentName}
                      </div>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                      }}
                    >
                      {table.chooseClass}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                        width:'200px',
                      
                      }}
                      className="text-xs text-center "
                    >
                     <div className='w-[90px] '>{table.startTime}</div> 
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                        width:'220px',
                     
                      }}
                    >
                   <div className='w-[95px] '> {table.endTime}</div>
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                        width:'230px',
                      

                      }}
                    >
                    <div className='w-[90px] '>{table.startDate}</div>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                        width:'250px',
                       
                      }}
                    >
                     <div  className='w-[85px] '>{table.endDate}</div> 
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                      }}
                    >
                     <div className='w-[65px] '>2 month</div> 
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                      }}
                    >
                     <div className='relative w-[100px] '> {table.selectTeacher}</div>
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                      }}
                    >
                      <div className="flex  w-[30px]">
                        <h1 className="">
                          <ImBin />
                        </h1>
                        <h1 className="">
                          <BiPencil />
                        </h1>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClassPages;
