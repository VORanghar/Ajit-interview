const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors"); // Import cors
app.use(cors());

app.use(express.json());

// Sample data that will be returned via the API
const tableData = [
  {
    tempid: 1,
    title: "Task 1",
    status: "Completed",
    notes: "Notes for task 1",
  },
  {
    tempid: 2,
    title: "Task 2",
    status: "In Progress",
    notes: "Notes for task 2",
  },
  { tempid: 3, title: "Task 3", status: "Pending", notes: "Notes for task 3" },
  {
    tempid: 4,
    title: "Task 4",
    status: "Completed",
    notes: "Notes for task 4",
  },
  {
    tempid: 5,
    title: "Task 5",
    status: "In Progress",
    notes: "Notes for task 5",
  },
  { tempid: 6, title: "Task 6", status: "Pending", notes: "Notes for task 6" },
  {
    tempid: 7,
    title: "Task 7",
    status: "Completed",
    notes: "Notes for task 7",
  },
  {
    tempid: 8,
    title: "Task 8",
    status: "In Progress",
    notes: "Notes for task 8",
  },
  { tempid: 9, title: "Task 9", status: "Pending", notes: "Notes for task 9" },
  {
    tempid: 10,
    title: "Task 10",
    status: "Completed",
    notes: "Notes for task 10",
  },
  {
    tempid: 11,
    title: "Task 11",
    status: "In Progress",
    notes: "Notes for task 11",
  },
  {
    tempid: 12,
    title: "Task 12",
    status: "Pending",
    notes: "Notes for task 12",
  },
  {
    tempid: 13,
    title: "Task 13",
    status: "Completed",
    notes: "Notes for task 13",
  },
  {
    tempid: 14,
    title: "Task 14",
    status: "In Progress",
    notes: "Notes for task 14",
  },
  {
    tempid: 15,
    title: "Task 15",
    status: "Pending",
    notes: "Notes for task 15",
  },
  {
    tempid: 16,
    title: "Task 16",
    status: "Completed",
    notes: "Notes for task 16",
  },
  {
    tempid: 17,
    title: "Task 17",
    status: "In Progress",
    notes: "Notes for task 17",
  },
  {
    tempid: 18,
    title: "Task 18",
    status: "Pending",
    notes: "Notes for task 18",
  },
  {
    tempid: 19,
    title: "Task 19",
    status: "Completed",
    notes: "Notes for task 19",
  },
  {
    tempid: 20,
    title: "Task 20",
    status: "In Progress",
    notes: "Notes for task 20",
  },
];

// Middleware to parse JSON request bodies (optional, if you plan to accept JSON requests)
app.use(express.json());

// GET route to fetch the table data
app.get("/api/table-data", (req, res) => {
  res.json(tableData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
