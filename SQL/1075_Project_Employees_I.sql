# Write your MySQL query statement below
  
SELECT P.project_id, ROUND(AVG(E.experience_years),2) as average_years
FROM Project P JOIN Employee E
ON P.employee_id = E.employee_id AND E.experience_years IS NOT NULL
GROUP BY P.project_id 
