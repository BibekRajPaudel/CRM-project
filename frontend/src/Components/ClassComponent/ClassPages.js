import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
const ClassPages = ({ rowsPerPage, page }) => {
  const [classtest, setClassTest] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/class").then((res) => {
      setClassTest(res.data);
    });
  }, []);
  return (
    <>
      <div className="w-full">
        <TableContainer>
          <Table
            aria-label="simple table"
            className="font-Poppins font-normal text-base "
          >
            <TableHead>
              <TableRow className="bg-[F4F4F4]">
                <TableCell className="font-semibold text-base font-poppins leading-7 ">
                  S.N
                </TableCell>
                <TableCell
                  align="center"
                  className="font-semibold text-base font-poppins leading-7 w-[150px] "
                >
                  Student Name
                </TableCell>
                <TableCell
                  align="center"
                  className="font-semibold text-base font-poppins leading-7 "
                >
                  Name
                </TableCell>

                <TableCell
                  align="center"
                  className="font-semibold text-base font-poppins leading-7 "
                >
                  Start Time
                </TableCell>
                <TableCell
                  align="center"
                  className="font-semibold text-base font-poppins leading-7 w-[150px] "
                >
                  End Time
                </TableCell>
                <TableCell
                  align="center"
                  className="font-semibold text-base font-poppins leading-7 w-[150px]"
                >
                  Start Date
                </TableCell>

                <TableCell
                  align="center"
                  className="font-semibold text-base font-poppins leading-7 w-[150px] "
                >
                  End Date
                </TableCell>
                <TableCell
                  align="center"
                  className="font-semibold text-base font-poppins leading-7 "
                >
                  Period
                </TableCell>
                <TableCell
                  align="center"
                  className="font-semibold text-base font-poppins leading-7 "
                >
                  Teacher
                </TableCell>
                <TableCell
                  align="center"
                  className="font-semibold text-base font-poppins leading-7 "
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
                      <TableCell component="th" scope="row">
                        <div className="font-poppins text-base  leading-7">
                          {index + 1}
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <div className="font-poppins text-base  leading-7">
                          {table.studentName}
                        </div>
                      </TableCell>
                      <TableCell
                        align="center"
                        className="font-poppins text-base  leading-7"
                      >
                        {table.chooseClass}
                      </TableCell>

                      <TableCell
                        align="center"
                        className="font-poppins text-base  leading-7"
                      >
                        {table.startTime}
                      </TableCell>
                      <TableCell
                        align="center"
                        className="font-poppins text-base  leading-7"
                      >
                        {table.endTime}
                      </TableCell>

                      <TableCell
                        align="center"
                        className="font-poppins text-base  leading-7"
                      >
                        {table.startDate}
                      </TableCell>
                      <TableCell
                        align="center"
                        className="font-poppins text-base  leading-7"
                      >
                        {table.endDate}
                      </TableCell>
                      <TableCell
                        align="center"
                        className="font-poppins text-base  leading-7"
                      >
                        {table.classPeriod}
                      </TableCell>
                      <TableCell
                        align="center"
                        className="font-poppins text-base  leading-7"
                      >
                        {table.selectTeacher}
                      </TableCell>

                      <TableCell align="center">
                        <p className='flex gap-5 justify-center'><span className='w-fit text-lg cursor-pointer hover:text-primary-blue'><FiEdit2 /></span><span className='w-fit text-lg cursor-pointer hover:text-red-500'><AiOutlineDelete /></span></p>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ClassPages;
