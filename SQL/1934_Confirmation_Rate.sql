# Write your MySQL query statement below
SELECT SU.user_id, ROUND(AVG(IF(C.action = "confirmed", 1, 0)), 2) as confirmation_rate
FROM Signups SU LEFT JOIN Confirmations C
ON SU.user_id = C.user_id
GROUP BY SU.user_id

