-- lists all shows contained in the database hbtn_0d_tvshows
-- lists all rows of a database that have one column in common
SELECT ts.title, tg.name FROM tv_shows `ts` 
LEFT JOIN tv_show_genres `tsg` ON ts.id = tsg.show_id 
LEFT JOIN tv_genres `tg` ON tsg.genre_id = tg.id 
ORDER BY ts.title ASC, tg.name ASC;