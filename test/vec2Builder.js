import {expect} from "chai";

import {Vec2, Vec2Builder} from "../src/ella.js";

describe("Vec2Builder", function () {
    beforeEach(function () {
        this.v0 = new Vec2Builder(1, 0);
    });

    describe("#fromVec2", function () {
        it("should create a Vec2Builder from a Vec2 object", function () {
            const r0 = Vec2Builder.fromVec2(new Vec2(1, 0));
            expect(r0.x).to.equal(1);
            expect(r0.y).to.equal(0);
        });
    });

    describe("#add", function () {
        it("should add the vector", function () {
            this.v0.add(0, 1);
            expect(this.v0.x).to.equal(1);
            expect(this.v0.y).to.equal(1);
        });

        it("should return the builder", function () {
            const r0 = this.v0.add(0, 1);
            expect(r0).to.equal(this.v0);
        });
    });

    describe("#sub", function () {
        it("should subtract the vector", function () {
            this.v0.sub(0, 1);
            expect(this.v0.x).to.equal(1);
            expect(this.v0.y).to.equal(-1);
        });

        it("should return the builder", function () {
            const r0 = this.v0.sub(0, 1);
            expect(r0).to.equal(this.v0);
        });
    });

    describe("#mul", function () {
        it("should multiply the vector with the scalar", function () {
            this.v0.mul(2);
            expect(this.v0.x).to.equal(2);
            expect(this.v0.y).to.equal(0);
        });

        it("should return the builder", function () {
            const r0 = this.v0.mul(2);
            expect(r0).to.equal(this.v0);
        });
    });

    describe("#div", function () {
        it("should divide the vector by the scalar", function () {
            this.v0.div(2);
            expect(this.v0.x).to.equal(0.5);
            expect(this.v0.y).to.equal(0);
        });

        it("should return the builder", function () {
            const r0 = this.v0.div(2);
            expect(r0).to.equal(this.v0);
        });
    });

    describe("#length", function () {
        const v0 = new Vec2Builder(3, 4);

        it("should return the length of the vector", function () {
            const r0 = v0.length();
            expect(r0).to.equal(5);
        });
    });

    describe("#normalize", function () {
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

    describe("#dot", function () {
        it("should return the dot product of the vectors", function () {
            const r0 = this.v0.dot(0, 1);
            expect(r0).to.equal(0);
        });
    });

    describe("#rotate", function () {
        it("should rotate the vector", function () {
            this.v0.rotate(Math.PI / 2);
            expect(this.v0.x).to.be.closeTo(0, Number.EPSILON);
            expect(this.v0.y).to.be.closeTo(1, Number.EPSILON);
        });

        it("should return the builder", function () {
            const r0 = this.v0.rotate(Math.PI / 2);
            expect(r0).to.equal(this.v0);
        });
    });

    describe("#toVec2", function () {
        it("should convert a Vec2Builder to a Vec2 object", function () {
            const r0 = this.v0.toVec2();
            expect(r0.x).to.equal(1);
            expect(r0.y).to.equal(0);
        });
    });

    describe("#toString", function () {
        it("should return a string", function () {
            expect(this.v0.toString()).to.be.a("string");
        });
    });

    describe("#equals", function () {
        it ("should check if another vector is equivalent", function () {
            const v1 = new Vec2Builder(3, 4);
            expect(this.v0.equals(this.v0)).to.be.true;
            expect(this.v0.equals(v1)).to.be.false;
        });
    });

    after(function () {
        delete this.v0;
    });
});
