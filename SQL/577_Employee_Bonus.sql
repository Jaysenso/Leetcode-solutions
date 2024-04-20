# Write your MySQL query statement below
-- SELECT name, bonus
-- FROM Employee e UNION Bonus b
-- ON e.empId = b.empId
-- WHERE b.bonus > 0


SELECT Employee.name, Bonus.bonus 
FROM Employee LEFT JOIN Bonus
ON Employee.empId = Bonus.empId
WHERE Bonus.bonus < 1000 OR Bonus.bonus is null;
