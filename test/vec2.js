import {expect} from "chai";

import {Vec2} from "../src/ella.js";

describe("Vec2", function () {
    beforeEach(function () {
        this.v0 = new Vec2(1, 0);
        this.v1 = new Vec2(0, 1);
    });

    describe("#add", function() {
        it("should leave the original vectors untouched", function () {
            this.v0.add(this.v1);
            expect(this.v0.x).to.equal(1);
            expect(this.v0.y).to.equal(0);
            expect(this.v1.x).to.equal(0);
            expect(this.v1.y).to.equal(1);
        });

        it("should return the sum of the vectors", function () {
            const r0 = this.v0.add(this.v1);
            expect(r0.x).to.equal(1);
            expect(r0.y).to.equal(1);
        });
    });

    describe("#sub", function() {
        it("should leave the original vectors untouched", function () {
            this.v0.sub(this.v1);
            expect(this.v0.x).to.equal(1);
            expect(this.v0.y).to.equal(0);
            expect(this.v1.x).to.equal(0);
            expect(this.v1.y).to.equal(1);
        });

        it("should return the difference of the vectors", function () {
            const r0 = this.v0.sub(this.v1);
            expect(r0.x).to.equal(1);
            expect(r0.y).to.equal(-1);
        });
    });

    describe("#mul", function() {
        it("should leave the original vector untouched", function () {
            this.v0.mul(2);
            expect(this.v0.x).to.equal(1);
            expect(this.v0.y).to.equal(0);
        });

        it("should return the product of the vector and the scalar", function () {
            const r0 = this.v0.mul(2);
            expect(r0.x).to.equal(2);
            expect(r0.y).to.equal(0);
        });
    });

    describe("#div", function() {
        it("should leave the original vector untouched", function () {
            this.v0.div(2);
            expect(this.v0.x).to.equal(1);
            expect(this.v0.y).to.equal(0);
        });

        it("should return the quotient of the vector and the scalar", function () {
            const r0 = this.v0.div(2);
            expect(r0.x).to.equal(0.5);
            expect(r0.y).to.equal(0);
        });
    });

    describe("#length", function() {
        const v0 = new Vec2(3, 4);

        it("should return the length of the vector", function () {
            const r0 = v0.length();
            expect(r0).to.equal(5);
        });
    });

    describe("#normalize", function() {
        const v0 = new Vec2(3, 4);

        it("should leave the original vector untouched", function () {
            v0.normalize();
            expect(v0.x).to.equal(3);
            expect(v0.y).to.equal(4);
        });

        it("should return a vector with length 1 pointing in the same direction", function () {
            const r0 = v0.normalize();
            expect(r0.x).to.be.closeTo(0.6, Number.EPSILON);
            expect(r0.y).to.be.closeTo(0.8, Number.EPSILON);
        });
    });

    describe("#dot", function() {
        it("should return the dot product of the vectors", function () {
            const r0 = this.v0.dot(this.v1);
            expect(r0).to.equal(0);
        });
    });

    describe("#rotate", function() {
        it("should leave the original vector untouched", function () {
            this.v0.rotate(Math.PI / 2);
            expect(this.v0.x).to.equal(1);
            expect(this.v0.y).to.equal(0);
        });

        it("should return the rotated vector", function () {
            const r0 = this.v0.rotate(Math.PI / 2);
            expect(r0.x).to.be.closeTo(0, Number.EPSILON);
            expect(r0.y).to.be.closeTo(1, Number.EPSILON);
        });
    });

    describe("#toString", function() {
        it("should return a string", function () {
            expect(this.v0.toString()).to.be.a("string");
        });
    });
});