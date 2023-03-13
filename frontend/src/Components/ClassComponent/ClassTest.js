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


const ClassTest = ({ rowsPerPage, page }) => {
  const [course, setCourses] = useState([]);

  //adding university
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/test").then((res) => {
      setCourses(res.data);
    });
  }, []);

  return (
    <div className=" w-full">

      <TableContainer>
        <Table
          aria-label="simple table"

        >
          <TableHead>
            <TableRow >
              <TableCell

                className="font-normal"

              >
                S.N
              </TableCell>
              <TableCell
                align="center"

              >
                Name
              </TableCell>
              <TableCell
                align="center"


              >
                Start Time
              </TableCell>

              <TableCell
                align="center"


              >
                End Time
              </TableCell>
              <TableCell
                align="center"


              >
                Test Date
              </TableCell>
              <TableCell
                align="center"


              >
                Result Date
              </TableCell>

              <TableCell
                align="center"

              >
                Description
              </TableCell>
              <TableCell
                align="center"

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
                      align="center"
                      component="th"
                      scope="row"

                    >
                      <div className="flex items-center gap-5 font-semibold">
                        {index + 1}
                      </div>
                    </TableCell>
                    <TableCell
                      align="center"

                    >
                      <div className=" items-center  hover:text-primary-blue">
                        {table.name}
                      </div>
                    </TableCell>
                    <TableCell
                      align="center"

                    >
                      {table.chooseTest}
                    </TableCell>
                    <TableCell
                      align="center"

                    >
                      {table.startTime}
                    </TableCell>
                    <TableCell
                      align="center"

                    >
                      <p >{table.endTime}</p>
                    </TableCell>
                    <TableCell
                      align="center"

                    >
                      <p >
                        {table.chooseResultDate}
                      </p>
                    </TableCell>

                    <TableCell
                      align="center"

                    >
                      <p >
                        {table.description}
                      </p>
                    </TableCell>
                    <TableCell
                      align="center"
                    >
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

export default ClassTest;
