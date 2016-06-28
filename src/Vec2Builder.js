import Vec2 from "./Vec2.js";

/**
 * A builder for a two dimensional vector. It can be use to perform vector
 * operations without allocating a lot of temporary objects. All calculations
 * are performed in place.
 */
export default class Vec2Builder {

    /**
     * Makes a builder representing the given vector.
     *
     * @param {Vec2} v
     * The vector to make a builder for.
     *
     * @return {Vec2Builder}
     * The builder.
     */
    static fromVec2(v) {
        return new Vec2Builder(v.x, v.y);
    }

    /**
     * @param {number} x
     * The x-coordinate.
     *
     * @param {number} y
     * The y-coordinate.
     */
    constructor(x, y) {

        /**
         * The x-coordinate.
         *
         * @type {number}
         */
        this.x = x;

        /**
         * The y-coordinate.
         *
         * @type {number}
         */
        this.y = y;
    }

    /**
     * Adds another vector to this one.
     *
     * @param {number} x
     * The x coordinate of the vector to add.
     *
     * @param {number} y
     * The y coordinate of the vector to add.
     *
     * @return {Vec2Builder}
     * This builder.
     */
    add(x, y) {
        this.x += x;
        this.y += y;
        return this;
    }

    /**
     * Subtracts another vector from this one.
     *
     * @param {number} x
     * The x coordinate of the vector to subtract.
     *
     * @param {number} y
     * The y coordinate of the vector to subtract.
     *
     * @return {Vec2Builder}
     * This builder.
     */
    sub(x, y) {
        this.x -= x;
        this.y -= y;
        return this;
    }

    /**
     * Multiplies this vector with a scalar.
     *
     * @param {number} s
     * The scalar to multiply with.
     *
     * @return {Vec2Builder}
     * This builder.
     */
    mul(s) {
        this.x *= s;
        this.y *= s;
        return this;
    }

    /**
     * Divides this vector by a scalar.
     *
     * @param {number} s
     * The scalar to divide by.
     *
     * @return {Vec2Builder}
     * This builder.
     */
    div(s) {
        this.x /= s;
        this.y /= s;
        return this;
    }

    /**
     * Calculates the length of this vector.
     *
     * @return {number}
     * The length of the vector.
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Sets the length of this vector to 1 while keeping its direction.
     *
     * @return {Vec2Builder}
     * This builder.
     */
    normalize() {
        const len = this.length();
        this.x /= len;
        this.y /= len;
        return this;
    }

    /**
     * Calculates the dot product of this vector and the given one.
     *
     * @param {number} x
     * The x coordinate of the other vector.
     *
     * @param {number} y
     * The y coordinate of the other vector.
     *
     * @return {number}
     * This vector.
     */
    dot(x, y) {
        return this.x * x + this.y * y;
    }

    /**
     * Rotates this vector by the given angle.
     *
     * @param {number} alpha
     * The angle by which to rotate given in radians.
     *
     * @return {Vec2}
     * This vector.
     */
    rotate(alpha) {
        const cos = Math.cos(alpha);
        const sin = Math.sin(alpha);
        const x   = this.x;
        const y   = this.y;

        this.x = x * cos - y * sin;
        this.y = x * sin + y * cos;

        return this;
    }

    /**
     * Returns the vector this builder represents.
     *
     * @return {Vec2}
     * The vector represented by this builder.
     */
    toVec2() {
        return new Vec2(this.x, this.y);
    }

    /**
     * Returns a textual representation of this vector.
     *
     * @return {string}
     * A textual representation of this vector.
     *
     * @override
     */
    toString() {
        return `(${this.x}, ${this.y})`;
    }

    /**
     * Checks if the given vector is equivalent to this one.
     *
     * @param {Vec2} v
     * The vector to compare to.
     *
     * @return {boolean}
     * The result of the test.
     */
    equals(v) {
        return this.x === v.x && this.y === v.y;
    }
}
