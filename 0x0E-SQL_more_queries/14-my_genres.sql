-- lists all shows contained in the database hbtn_0d_tvshows
-- lists all rows of a database that have one column in common
SELECT tv_genres.name AS `name` FROM tv_genres INNER JOIN tv_show_genres ON tv_genres.id = tv_show_genres.genre_id WHERE tv_show_genres.show_id = (SELECT id FROM tv_shows WHERE `title` = 'Dexter') ORDER BY `name` ASC;