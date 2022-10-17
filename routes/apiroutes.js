const path = require("path");
const router = require('express').Router();
const fs = require("fs");

router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
});

router.post("/notes", (req,res) => {
    var notes = fs.readFileSync(path.join(__dirname, "db/db.json"), "utf-8");
    var note = req.body
    var id = notes.length.toString();
    note.id = id;
    notes.push(note);
    fs.writeFileSync(path.join(__dirname, "db/db.json"), JSON.stringify(notes));
    res.json(notes);
});


module.exports = router;