-- lists all records of the table second_table of the database hbtn_0c_0 in your MySQL server.
-- selects all records with a name
SELECT state, MAX(value) AS max_temp FROM temperatures GROUP BY state ORDER BY state ASC;
