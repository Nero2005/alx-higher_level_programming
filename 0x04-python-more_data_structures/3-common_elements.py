#!/usr/bin/python3
def common_elements(set_1, set_2):
    return list(set_1.intersection(set_2))

print(common_elements({ "Python", "C", "Javascript" },{ "Bash", "C", "Ruby", "Perl" }))
