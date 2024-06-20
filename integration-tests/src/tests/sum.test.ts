import { describe, expect, it, beforeEach } from "vitest";
import { ResetDb } from "./helpers/reset-db";
import { app } from "../";
import request from "supertest";

describe("POST /sum", () => {
  it("should return sum of two numbers", async () => {
    // this is actually unecessary

    beforeEach(async () => {
      console.log("clearing db");
      await ResetDb();
    });

    const res = await request(app).post("/sum").send({
      a: 1,
      b: 3,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ answer: 4, id: expect.any(Number) });
  });
});
