-- # Write your MySQL query statement below
-- # quality : The average of the ratio between query rating and its position.
-- # poor query percentage : The percentage of all queries with rating less than 3.

SELECT query_name, 
ROUND(AVG(rating/position),2) as quality,
ROUND(SUM(CASE WHEN Q.rating < 3 THEN 1 ELSE 0 END) / COUNT(*) * 100,2) AS poor_query_percentage
-- # SubQuery Approach
-- # ROUND(
-- #    (SELECT COUNT(rating) 
-- #     FROM Queries 
-- #     WHERE rating < 3 AND Q.query_name = query_name
-- #     ) /COUNT(*) * 100,2) as poor_query_percentage

FROM Queries Q
WHERE Q.query_name is not null
GROUP BY query_name

