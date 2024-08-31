const request = require('supertest');
const app = require('../app');

describe("POST /api/cookie", () => {

    describe("Given an unused cookie name", () => {
        test("Should respond with a 201 status code", async () => {
            const response = await request(app).post("/api/cookie").send({
                name: "Chocolate Chip",
                description: "Classic sensation with rich semi-sweet chocolate in soft buttery dough",
                price: 20,
                image: null
            });
            expect(response.statusCode).toBe(201);
        });
    });

    describe("Given an used cookie name", () => {
        test("Should respond with a 400 status code", async () => {
            const response = await request(app).post("/api/cookie").send({
                name: "Chocolate Chip",
                description: "Classic sensation with rich semi-sweet chocolate in soft buttery dough",
                price: 20,
                image: null
            });
            expect(response.statusCode).toBe(400);
        });
    });
});

describe("GET /api/cookie/:id", () => {
    
    describe("Given an id of cookie that already exist", () => {
        test("Should respond with a 200 status code", async () => {
            const response = await request(app).get("/api/cookie/:1").send({});
            expect(response.statusCode).toBe(200);
        });
    });

    describe("Given an id of cookie that is not exist", () => {
        test("Should respond with a 404 status code", async () => {
            const response = await request(app).get("/api/cookie/:10").send({});
            expect(response.statusCode).toBe(404);
        });
    });
});