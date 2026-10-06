const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

let students = [
    {
        rollNo: 101,
        name: "Nikitha",
        sem: 5,
        grade: "A"
    },
    {
        rollNo: 102,
        name: "Bhruhathi",
        sem: 5,
        grade: "A"
    },
    {
        rollNo: 103,
        name: "Akshitha",
        sem: 5,
        grade: "B"
    }
];

app.get("/", (req, res) => {
    res.send("Student Management REST API is running");
});

app.get("/api/students", (req, res) => {
    res.json(students);
});

app.get("/api/students/:rollNo", (req, res) => {
    const rollNo = parseInt(req.params.rollNo);

    const student = students.find(student => student.rollNo === rollNo);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

app.post("/api/students", (req, res) => {

    const { name, rollNo, sem, grade } = req.body;

    if (!name || !rollNo || !sem || !grade) {
        return res.status(400).json({
            message: "Name, rollNo, sem and grade are required"
        });
    }

    const newStudent = {
        rollNo: rollNo,
        name: name,
        sem: sem,
        grade: grade
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

app.put("/api/students/:rollNo", (req, res) => {

    const rollNo = parseInt(req.params.rollNo);

    const student = students.find(student => student.rollNo === rollNo);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { sem } = req.body;

    if (!sem) {
        return res.status(400).json({
            message: "Semester is required"
        });
    }

    student.sem = sem;

    res.json({
        message: "Student semester updated successfully",
        student: student
    });
});

app.delete("/api/students/:rollNo", (req, res) => {

    const rollNo = parseInt(req.params.rollNo);

    const index = students.findIndex(student => student.rollNo === rollNo);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});