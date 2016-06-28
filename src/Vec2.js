/**
 * A two dimensional vector.
 */
export default class Vec2 {

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
     * Adds another vector to this vector. The original vectors remain
     * unaffected.
     *
     * @param {Vec2} v
     * The vector to be added.
     *
     * @return {Vec2}
     * The sum of the vectors.
     */
    add(v) {
        return new Vec2(this.x + v.x, this.y + v.y);
    }

    /**
     * Subtracts another vector from this vector. The original vectors remain
     * unaffected.
     *
     * @param {Vec2} v
     * The vector to be subtracted.
     *
     * @return {Vec2}
     * The difference between the vectors.
     */
    sub(v) {
        return new Vec2(this.x - v.x, this.y - v.y);
    }

    /**
     * Multiplies this vector by a scalar. The original vector remains
     * unaffected.
     *
     * @param {number} s
     * The scalar by which the vector gets multiplied.
     *
     * @return {Vec2}
     * The product of vector and scalar.
     */
    mul(s) {
        return new Vec2(this.x * s, this.y * s);
    }

    /**
     * Divides this vector by a scalar. The original vector remains unaffected.
     *
     * @param {number} s
     * The scalar by which the vector gets divided.
     *
     * @return {Vec2}
     * The quotient of vector and scalar.
     */
    div(s) {
        return new Vec2(this.x / s, this.y / s);
    }

    /**
     * Calculates the length of the vector. The original vector remains
     * unaffected.
     *
     * @return {number}
     * The length of the vector.
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Creates a vector that points in the same direction as the original vector
     * but has length 1. The original vector remains unaffected.
     *
     * @return {Vec2}
     * The normalized vector.
     */
    normalize() {
        return this.div(this.length());
    }

    /**
     * Calculates the dot product of this vector and the given vector. The
     * original vectors remain unaffected.
     *
     * @param {Vec2} v
     * The second argument.
     *
     * @return {number}
     * The dot product of the two vectors.
     */
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    /**
     * Rotates this vector by the given angle. The original vector remains
     * unaffected.
     *
     * @param {number} alpha
     * The angle by which to rotate given in radians.
     *
     * @return {Vec2}
     * The rotated vector.
     */
    rotate(alpha) {
        const cos = Math.cos(alpha);
        const sin = Math.sin(alpha);

        return new Vec2(
            this.x * cos - this.y * sin,
            this.x * sin + this.y * cos
        );
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
