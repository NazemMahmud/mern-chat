import {app} from "../server.js"
import request from "supertest"

// Test 1: perfect login
test("Should login a user", async () => {
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
})


// Test 2: required fields missing (multi error)
// Test 3: email pattern mismatched (single error)
// Test 4: password length mismatched (single error)
