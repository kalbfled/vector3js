class Vector3
{
    constructor(x=0, y=0, z=0)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /* Return the scalar multiple of "scale" and this as a new Vector3. */
    scale(scalar)
    {
        return new Vector3(
            scalar * this.x,
            scalar * this.y,
            scalar * this.z
        );
    }

    /* Return (this + other) as a new Vector3. */
    plus(other)
    {
        return new Vector3(
            this.x + other.x,
            this.y + other.y,
            this.z + other.z
        );
    }


    /* Return (this - other) as a new Vector3. */
    minus(other)
    {
        return new Vector3(
            this.x - other.x,
            this.y - other.y,
            this.z - other.z
        );
    }

    /* Return the dot product of this and "other". */
    dot(other)
    {
        return (this.x * other.x) + (this.y * other.y) + (this.z * other.z);
    }

    /* Return the cross product of this and "other". */
    cross(other)
    {
        return new Vector3(
            this.y * other.z - this.z * other.y,
            this.z * other.x - this.x * other.z,
            this.x * other.y - this.y * other.x
        );
    }
}


// Test construction with and without default values.
console.log(new Vector3());
const vec1 = new Vector3(1, 2, 3);
const vec2 = new Vector3(10, 20, 30);
console.log(vec1);
console.log(vec2);

// Test scalar multiplication
console.log(vec1.scale(3));

// Test addition
console.log(vec1.plus(vec2));

// Test subtraction
console.log(vec1.minus(vec2));
console.log(vec2.minus(vec1));

// Test chaining methods
console.log(vec1.plus(vec2).minus(new Vector3(4, 5, 6)));

// Test dot product
console.log(vec1.dot(vec2));

// Test cross product
console.log((new Vector3(1, 0, 0)).cross(new Vector3(0, 1, 0)));
console.log(vec1.cross(vec2));

