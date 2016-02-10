/* global describe */
/* global it */
import {expect} from "chai";

import {Vec2, Vec2Builder} from "../src/ella.js";

/** @test {Vec2Builder} */
describe("Vec2Builder", function () {

    /** @test {Vec2Builder#fromVec2} */
    describe("#fromVec2", function () {
        it("should create a Vec2Builder from a Vec2 object", function () {
            const r0 = Vec2Builder.fromVec2(new Vec2(1, 0));

            expect(r0.x).to.equal(1);
            expect(r0.y).to.equal(0);
        });
    });

    /** @test {Vec2Builder#add} */
    describe("#add", function() {
        const v0 = new Vec2Builder(1, 0);

        it("should add the vector", function () {
            v0.add(0, 1);
            expect(v0.x).to.equal(1);
            expect(v0.y).to.equal(1);
        });

        it("should return the builder", function () {
            const r0 = v0.add(0, 1);
            expect(r0).to.equal(v0);
        });
    });

    /** @test {Vec2Builder#sub} */
    describe("#sub", function() {
        const v0 = new Vec2Builder(1, 0);

        it("should subtract the vector", function () {
            v0.sub(0, 1);
            expect(v0.x).to.equal(1);
            expect(v0.y).to.equal(-1);
        });

        it("should return the builder", function () {
            const r0 = v0.sub(0, 1);
            expect(r0).to.equal(v0);
        });
    });

    /** @test {Vec2Builder#mul} */
    describe("#mul", function() {
        const v0 = new Vec2Builder(1, 0);

        it("should multiply the vector with the scalar", function () {
            v0.mul(2);
            expect(v0.x).to.equal(2);
            expect(v0.y).to.equal(0);
        });

        it("should return the builder", function () {
            const r0 = v0.mul(2);
            expect(r0).to.equal(v0);
        });
    });

    /** @test {Vec2Builder#div} */
    describe("#div", function() {
        const v0 = new Vec2Builder(2, 0);

        it("should divide the vector by the scalar", function () {
            const v1 = v0.div(2);
            expect(v1.x).to.equal(1);
            expect(v1.y).to.equal(0);
        });

        it("should return the builder", function () {
            const r0 = v0.div(2);
            expect(r0).to.equal(v0);
        });
    });

    /** @test {Vec2Builder#length} */
    describe("#length", function() {
        const v0 = new Vec2Builder(3, 4);

        it("should return the length of the vector", function () {
            const r0 = v0.length();
            expect(r0).to.equal(5);
        });
    });

    /** @test {Vec2Builder#normalize} */
    describe("#normalize", function() {
        const v0 = new Vec2Builder(3, 4);

        it("should set the length of this vector to 1 while maintaining its direction", function () {
            v0.normalize();
            expect(v0.x).to.be.closeTo(0.6, Number.EPSILON);
            expect(v0.y).to.be.closeTo(0.8, Number.EPSILON);
        });

        it("should return the builder", function () {
            const r0 = v0.normalize();
            expect(r0).to.equal(v0);
        });
    });

    /** @test {Vec2Builder#dot} */
    describe("#dot", function() {
        const v0 = new Vec2Builder(1, 0);

        it("should return the dot product of the vectors", function () {
            const r0 = v0.dot(0, 1);
            expect(r0).to.equal(0);
        });
    });

    /** @test {Vec2Builder#rotate} */
    describe("#rotate", function() {
        const v0 = new Vec2Builder(1, 0);

        it("should rotate the vector", function () {
            v0.rotate(Math.PI / 2);
            expect(v0.x).to.be.closeTo(0, Number.EPSILON);
            expect(v0.y).to.be.closeTo(1, Number.EPSILON);
        });

        it("should return the builder", function () {
            const r0 = v0.rotate(Math.PI / 2);
            expect(r0).to.equal(v0);
        });
    });

    /** @test {Vec2Builder#toVec2} */
    describe("#toVec2", function () {
        it("should convert a Vec2Builder to a Vec2 object", function () {
            const r0 = new Vec2Builder(1, 0).toVec2();

            expect(r0.x).to.equal(1);
            expect(r0.y).to.equal(0);
        });
    });

    /** @test {Vec2Builder#toString} */
    describe("#toString", function() {
        const v0 = new Vec2Builder(1, 0);

        it("should return a string", function () {
            expect(v0.toString()).to.be.a("string");
        });
    });
});
