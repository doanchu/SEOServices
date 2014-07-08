package com.objectdb.tutorial;

import javax.persistence.Cacheable;
import javax.persistence.Entity;

@Entity
public class Point {
    // Persistent Fields:
    private int x;
    private int y;

    // Constructor:
    public Point (int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Accessor Methods:
    public int getX() { return this.x; }
    public int getY() { return this.y; }

    // String Representation:
    @Override
    public String toString() {
        return String.format("(%d, %d)", this.x, this.y);
    }
}