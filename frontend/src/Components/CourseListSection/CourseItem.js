import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const CourseItem = ({ course, rowsPerPage, page }) => {

  return (
    <div className="">
      <TableContainer>
        <Table
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F4F4F4" }}>
              <TableCell className="font-poppins text-sm">
                S.N
              </TableCell>
              <TableCell
                align="center" className="font-poppins text-sm font-bold">
                Course Name
              </TableCell>
              <TableCell
                align="center"
                className="font-poppins text-sm font-bold">
                Program
              </TableCell>

              <TableCell
                align="center"
                className="font-poppins text-sm font-bold">
                Level
              </TableCell>
              <TableCell
                align="center"
                className="font-poppins text-sm font-bold">
                Period
              </TableCell>
              <TableCell
                align="center"
                className="font-poppins text-sm font-bold">
                University Names
              </TableCell>
              <TableCell
                align="center"
                className="font-poppins text-sm font-bold">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {course && course.getAllCourses && course.getAllCourses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((table, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className="font-poppins text-sm">{index + 1}
                </TableCell>
                <TableCell
                  align="center"
                  className="font-poppins text-sm">
                  <Link to={`/universitydetail/${table._id}`}>{table.universityName}</Link>
                  <p>{table.established}</p>
                </TableCell>
                <TableCell
                  align="center"
                  className="font-poppins text-sm">{table.program}
                </TableCell>
                <TableCell
                  align="center"
                  className="font-poppins text-sm">
                  {table.level}
                </TableCell>
                <TableCell
                  align="center"
                  className="font-poppins text-sm">
                  {table.coursePeriod}
                </TableCell>
                <TableCell
                  align="center"
                  className="font-poppins text-sm">
                  {table.coursePeriod}
                </TableCell>
                <TableCell
                  align="center"
                  className="font-poppins text-sm">
                  <p className='flex gap-5 justify-center'><span className='w-fit text-lg cursor-pointer hover:text-primary-blue'><FiEdit2 /></span><span className='w-fit text-lg cursor-pointer hover:text-red-500'><AiOutlineDelete /></span></p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CourseItem;
