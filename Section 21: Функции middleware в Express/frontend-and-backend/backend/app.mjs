import express from "express";
import morgan from "morgan";
import cors from "cors";
const PORT = 4000;

const app = express();

// app.use(logger);
// app.use(morgan("combined"));
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res) => {
    const personData = {
        name: "Sergii",
        isInstructor: true,
    };
    console.log(req.body);
    return res.json(personData);
});

app.listen(PORT, () => console.log(`Starting server in port ${PORT}`));
