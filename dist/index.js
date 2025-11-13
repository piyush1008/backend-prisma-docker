import { Prisma } from "@prisma/client";
import express from "express";
import { prisma } from "./db.js";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("container is up");
});
app.get("/users", (req, res) => {
    res.send("users");
});
app.post("/user", async (req, res) => {
    try {
        const { username, password } = req.body;
        await prisma.user.create({
            data: {
                username,
                password
            }
        });
        res.json({
            message: "user is sign up "
        });
    }
    catch (error) {
        console.log(error);
    }
});
app.listen(8000);
//# sourceMappingURL=index.js.map