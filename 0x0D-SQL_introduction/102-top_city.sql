-- lists all records of the table second_table of the database hbtn_0c_0 in your MySQL server.
-- selects all records with a name
SELECT city, AVG(value) AS avg_temp FROM temperatures WHERE month = 7 OR month = 8 GROUP BY city ORDER BY avg_temp DESC LIMIT 3;
