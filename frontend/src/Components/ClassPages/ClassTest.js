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

const ClassTest = ({ rowsPerPage, page }) => {
  const [course, setCourses] = useState([]);
  //adding university
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/test").then((res) => {
      console.log("Hello", res.data);
      setCourses(res.data);
    });
  }, []);

  return (
    <div className=" w-full relative ">
      <TableContainer>
        <Table
          aria-label="simple table"
          className="font-Poppins font-normal text-base "
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F4F4F4" }}>
              <TableCell
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className="font-normal"
                style={{ fontSiex: "16px", LineHeight: "24px" }}
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
                className="font-normal"
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
                className="font-normal"
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
                className="font-normal"
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
                className="font-normal"
                style={{ fontSiex: "16px", LineHeight: "24px" }}
              >
              Test Date
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className="font-normal"
                style={{ fontSiex: "16px", LineHeight: "24px" }}
              >
              Result Date
              </TableCell>
             
              <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#616161",
                }}
                className="font-normal"
                style={{ fontSiex: "16px", LineHeight: "24px" }}
              >
                Description
              </TableCell>
              <TableCell
              align="center"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "15px",
                color: "#616161",
              }}
              className="font-normal"
              style={{ fontSiex: "16px", LineHeight: "24px" }}
            >
              Action
            </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {course &&
              course.getAllTest &&
              course.getAllTest

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
                      <div className="flex items-center gap-4 pl-5 hover:text-primary-blue">
                     
                      {table.name}
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
                       {table.chooseTest}
                     
                    
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                      }}
                      className="font-semibold pl-2"
                    >
                      {table.startTime}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                      }}
                    >
                      <h1 className="font-semibold pl-2">
                        {table.endTime}
                      </h1>
                      
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                      }}
                    >
                      <h1 className="font-semibold pl-2">
                        {table.chooseResultDate}
                      </h1>
                  
                    </TableCell>
                 
                
                <TableCell
                align="center"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px",
                  color: "#616161",
                }}
              >
                <h1 className="font-semibold pl-2">
                  {table.description}
                </h1>
            
              </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#616161",
                      }}
                    >
                      <div className="flex">
                        <h1 className="font-semibold pl-2">
                          <ImBin />{" "}
                        </h1>
                        <h1 className="font-semibold pl-2">
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

export default ClassTest;
