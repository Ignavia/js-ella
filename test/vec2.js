/* global describe */
/* global it */
import {expect} from "chai";

import {Vec2} from "@ignavia/ella";

export default function () {

    /** @test {Vec2} */
    describe("Vec2", function () {

        /** @test {Vec2#add} */
        describe("#add", function() {
            const v0 = new Vec2(1, 0),
                v1 = new Vec2(0, 1);

            it("should leave the original vectors untouched", function () {
                v0.add(v1);
                expect(v0.x).to.equal(1);
                expect(v0.y).to.equal(0);
                expect(v1.x).to.equal(0);
                expect(v1.y).to.equal(1);
            });

            it("should return the sum of the vectors", function () {
                const v2 = v0.add(v1);
                expect(v2.x).to.equal(1);
                expect(v2.y).to.equal(1);
            });
        });

        /** @test {Vec2#sub} */
        describe("#sub", function() {
            const v0 = new Vec2(1, 0),
                v1 = new Vec2(0, 1);

            it("should leave the original vectors untouched", function () {
                v0.sub(v1);
                expect(v0.x).to.equal(1);
                expect(v0.y).to.equal(0);
                expect(v1.x).to.equal(0);
                expect(v1.y).to.equal(1);
            });

            it("should return the difference of the vectors", function () {
                const v2 = v0.sub(v1);
                expect(v2.x).to.equal(1);
                expect(v2.y).to.equal(-1);
            });
        });

        /** @test {Vec2#mul} */
        describe("#mul", function() {
            const v0 = new Vec2(1, 0);

            it("should leave the original vector untouched", function () {
                v0.mul(2);
                expect(v0.x).to.equal(1);
                expect(v0.y).to.equal(0);
            });

            it("should return the product of the vector and the scalar", function () {
                const v1 = v0.mul(2);
                expect(v1.x).to.equal(2);
                expect(v1.y).to.equal(0);
            });
        });

        /** @test {Vec2#div} */
        describe("#div", function() {
            const v0 = new Vec2(2, 0);

            it("should leave the original vector untouched", function () {
                v0.div(2);
                expect(v0.x).to.equal(2);
                expect(v0.y).to.equal(0);
            });

            it("should return the quotient of the vector and the scalar", function () {
                const v1 = v0.div(2);
                expect(v1.x).to.equal(1);
                expect(v1.y).to.equal(0);
            });
        });

        /** @test {Vec2#length} */
        describe("#length", function() {
            const v0 = new Vec2(3, 4);

            it("should return the length of the vector", function () {
                const r0 = v0.length();
                expect(r0).to.equal(5);
            });
        });

        /** @test {Vec2#normalize} */
        describe("#normalize", function() {
            const v0 = new Vec2(3, 4);

            it("should leave the original vector untouched", function () {
                v0.normalize();
                expect(v0.x).to.equal(3);
                expect(v0.y).to.equal(4);
            });

            it("should return a vector with length 1 pointing in the same direction", function () {
                const v1 = v0.normalize();
                expect(v1.x).to.be.closeTo(0.6, 0.001);
                expect(v1.y).to.be.closeTo(0.8, 0.001);
            });
        });

        /** @test {Vec2#dot} */
        describe("#dot", function() {
            const v0 = new Vec2(1, 0),
                v1 = new Vec2(0, 1);

            it("should return the dot product of the vectors", function () {
                const r0 = v0.dot(v1);
                expect(r0).to.equal(0);
            });
        });

        /** @test {Vec2#rotate} */
        describe("#rotate", function() {
            const v0 = new Vec2(1, 0);

            it("should leave the original vector untouched", function () {
                v0.rotate(Math.PI / 2);
                expect(v0.x).to.equal(1);
                expect(v0.y).to.equal(0);
            });

            it("should return the rotated vector", function () {
                const v1 = v0.rotate(Math.PI / 2);
                expect(v1.x).to.be.closeTo(0, 0.001);
                expect(v1.y).to.be.closeTo(1, 0.001);
            });
        });

        /** @test {Vec2#toString} */
        describe("#toString", function() {
            const v0 = new Vec2(1, 0);

            it("should return a string", function () {
                expect(v0.toString()).to.be.a("string");
            });
        });
    });
}