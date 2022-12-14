#!/usr/bin/python3
"""Module 2-append_write."""


def append_write(filename="", text=""):
    """ a function that appends a string to a text file (UTF8)
    and returns the number of characters written."""
    with open(filename, "a") as f:
        return f.write(text)
