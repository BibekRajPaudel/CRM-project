const UniveristyCol = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "universityname", headerName: "University Name", width: 130 },
  { field: "country", headerName: "Country", width: 130 },
  {
    field: "location",
    headerName: "Location",
    width: 90,
  },
  {
    field: "universityinfo",
    headerName: "University Info",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

export default UniveristyCol;
