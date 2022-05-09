import {app} from "../server.js"
import request from "supertest"

/**
 * describe() => is used for grouping together related tests
 * it() is an alias of test() => which runs the actual test.
 * expect() => tests a value using a set of matcher functions.
 */


describe('Login test', () => {
    // Test 1: perfect login
    it("Should login a user", async () => {
        const res = await request(app).post('/api/auth/login')
            .send({
                email: "testuser1@gmail.com",
                password: "123456"
            })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data.id');
        expect(res.body).toHaveProperty('data.username');
        expect(res.body).toHaveProperty('data.email');
        expect(res.body).toHaveProperty('data.accessToken');
        expect(res.body).toHaveProperty('status');
    })

    // Test 2: required fields missing (multi error), failed response
    it("Error: required fields missing", async () => {
        const res = await request(app).post('/api/auth/login')
            .send()
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('data');
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('status');
    })

    // Test 3: required fields missing (multi error), success response
    it("Error: required fields missing, success", async () => {
        const errorMessages = [
            "email is required",
            "password is required"
        ];
        const res = await request(app).post('/api/auth/login')
            .send()
        expect(res.statusCode).toEqual(422);
        expect(res.body).toHaveProperty('data');
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('status');
        expect(res.body).toEqual({
            "data": null,
            "message": errorMessages,
            "status": "failed"
        })
    })

    // Test 4: required fields empty
    it("Error: required fields empty", async () => {
        const errorMessages = [
            "email is not allowed to be empty",
            "password is not allowed to be empty"
        ];
        const res = await request(app).post('/api/auth/login')
            .send({
                email: "",
                password: ""
            })
        expect(res.statusCode).toEqual(422);
        expect(res.body).toEqual({
            "data": null,
            "message": errorMessages,
            "status": "failed"
        })
    })

    // Test 5: email pattern mismatch, password length
    it("Error: email pattern mismatch, password length", async () => {
        const errorMessages = [
            "email must be a valid email",
            "password length must be at least 3 characters long"
        ];
        const res = await request(app).post('/api/auth/login')
            .send({
                "email": "testuser1",
                "password": "12"
            })
        expect(res.statusCode).toEqual(422);
        expect(res.body).toEqual({
            "data": null,
            "message": errorMessages,
            "status": "failed"
        })
    })
})

describe('Registration test', () => {
    // Test 1: perfect registration
    it("Should register a user", async () => {
        const result = await request(app).post('/api/auth/signup')
            .send({
                name: 'test user 12',
                email: "testuser12@gmail.com",
                password: "123456"
            })
        expect(result.statusCode).toEqual(201);
        expect(result.body).toHaveProperty('message');
        expect(result.body).toHaveProperty('status');
        expect(result.body.status).toEqual('success');
    })

    // Test 2: required fields missing (multi error)
    it("Error: required fields missing, success", async () => {
        const errorMessages = [
            "name is required",
            "email is required",
            "password is required"
        ];
        const result = await request(app).post('/api/auth/signup')
            .send()
        expect(result.statusCode).toEqual(422);
        expect(result.body).toHaveProperty('data');
        expect(result.body).toHaveProperty('message');
        expect(result.body).toHaveProperty('status');
        expect(result.body).toEqual({
            "data": null,
            "message": errorMessages,
            "status": "failed"
        })
    })

    // Test 3: required fields empty
    it("Error: required fields empty", async () => {
        const errorMessages = [
            "name is not allowed to be empty",
            "email is not allowed to be empty",
            "password is not allowed to be empty"
        ];
        const result = await request(app).post('/api/auth/signup')
            .send({
                name: "",
                email: "",
                password: ""
            })
        expect(result.statusCode).toEqual(422);
        expect(result.body).toEqual({
            "data": null,
            "message": errorMessages,
            "status": "failed"
        })
    })

    // Test 4: email pattern mismatch, password length
    it("Error: email pattern mismatch, password length", async () => {
        const errorMessages = [
            "email must be a valid email",
            "password length must be at least 3 characters long"
        ];
        const result = await request(app).post('/api/auth/signup')
            .send({
                name: "testuser12",
                email: "testuser12",
                password: "12"
            })
        expect(result.statusCode).toEqual(422);
        expect(result.body).toEqual({
            "data": null,
            "message": errorMessages,
            "status": "failed"
        })
    })
})
