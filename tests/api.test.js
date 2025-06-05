const axios = require('axios');
const assert = require('assert');

const API_URL = 'http://localhost:8000'; // Assuming server runs on port 8000

describe('Calculator API', function() {

    // --- Addition Tests ---
    describe('GET /_add', function() {
        it('should return the sum of multiple numbers', async function() {
            const response = await axios.get(`${API_URL}/_add/10/5/3`);
            assert.equal(response.status, 200);
            assert.deepStrictEqual(response.data, { result: 18 });
        });

        it('should return the sum of a single number', async function() {
            const response = await axios.get(`${API_URL}/_add/7`);
            assert.equal(response.status, 200);
            assert.deepStrictEqual(response.data, { result: 7 });
        });
    });

    // --- Subtraction Tests ---
    describe('GET /_substract', function() {
        it('should return the result of sequential subtraction', async function() {
            const response = await axios.get(`${API_URL}/_substract/10/5/2`);
            assert.equal(response.status, 200);
            assert.deepStrictEqual(response.data, { result: 3 });
        });

        it('should return a 400 error if no numbers are provided', async function() {
            try {
                await axios.get(`${API_URL}/_substract/`);
                assert.fail('Expected request to fail');
            } catch (error) {
                assert.equal(error.response.status, 400);
                assert.deepStrictEqual(error.response.data, { error: "Please provide numbers for subtraction. e.g., /_substract/10/5" });
            }
        });
         it('should return a 400 error if no numbers are provided (trailing slash)', async function() {
            try {
                await axios.get(`${API_URL}/_substract//`); // Test case for /_substract/ which results in [""]
                assert.fail('Expected request to fail');
            } catch (error) {
                assert.equal(error.response.status, 400);
                 assert.deepStrictEqual(error.response.data, { error: "Please provide numbers for subtraction. e.g., /_substract/10/5" });
            }
        });
    });

    // --- Multiplication Tests ---
    describe('GET /_multiply', function() {
        it('should return the product of multiple numbers', async function() {
            const response = await axios.get(`${API_URL}/_multiply/10/5/2`);
            assert.equal(response.status, 200);
            assert.deepStrictEqual(response.data, { result: 100 });
        });
    });

    // --- Division Tests ---
    describe('GET /_division', function() {
        it('should return the result of division for two numbers', async function() {
            const response = await axios.get(`${API_URL}/_division/10/2`);
            assert.equal(response.status, 200);
            assert.deepStrictEqual(response.data, { result: 5 });
        });

        it('should return a 400 error for division by zero', async function() {
            try {
                await axios.get(`${API_URL}/_division/10/0`);
                assert.fail('Expected request to fail');
            } catch (error) {
                assert.equal(error.response.status, 400);
                assert.deepStrictEqual(error.response.data, { error: "Division by 0 is *NOT* allowed" });
            }
        });

        it('should return a 400 error for more than two numbers', async function() {
            try {
                await axios.get(`${API_URL}/_division/10/2/5`);
                assert.fail('Expected request to fail');
            } catch (error) {
                assert.equal(error.response.status, 400);
                assert.deepStrictEqual(error.response.data, { error: "Division only works with exactly two valid numbers. e.g., /_division/10/2" });
            }
        });

        it('should return a 400 error for less than two numbers', async function() {
            try {
                await axios.get(`${API_URL}/_division/10`);
                assert.fail('Expected request to fail');
            } catch (error) {
                assert.equal(error.response.status, 400);
                assert.deepStrictEqual(error.response.data, { error: "Division only works with exactly two valid numbers. e.g., /_division/10/2" });
            }
        });

        it('should return a 400 error for non-numeric input', async function() {
            try {
                await axios.get(`${API_URL}/_division/abc/5`);
                assert.fail('Expected request to fail');
            } catch (error) {
                assert.equal(error.response.status, 400);
                assert.deepStrictEqual(error.response.data, { error: "Division only works with exactly two valid numbers. e.g., /_division/10/2" });
            }
        });

        it('should return a 400 error for empty string input', async function() {
            try {
                await axios.get(`${API_URL}/_division//5`); // Test /_division//5
                assert.fail('Expected request to fail');
            } catch (error) {
                assert.equal(error.response.status, 400);
                assert.deepStrictEqual(error.response.data, { error: "Division only works with exactly two valid numbers. e.g., /_division/10/2" });
            }
        });
    });
});
