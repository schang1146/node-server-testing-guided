const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
    it("should set the testing environment", () => {
        expect(process.env.DB_ENV).toBe("testing");
    });

    // http status code (ex: 200, 401, 500, etc.)
    // format of the data (JSON, XML, etc.)
    // structure of the return data ({field: 'value', field2: 'etc' ...})

    describe("GET /", () => {
        //
        // test for status code
        //
        it("should return 200 ok", async () => {
            const res = await request(server).get("/");
            expect(res.status).toBe(200);
        });

        //
        // test for format
        //
        it("should return a json object", async () => {
            const res = await request(server).get("/");
            expect(res.type).toBe("application/json");
        });

        //
        // test for json body structure
        //
        it("should return {api: 'up'}", async () => {
            const res = await request(server).get("/");
            expect(res.body).toEqual({ api: "up" });
        });
    });
});
