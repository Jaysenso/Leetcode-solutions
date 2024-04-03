# Write your MySQL query statement below


  

SELECT w1.id
# We uses a self-join on the weather table. Each row in the "Weather" is paired with every other row in the same table
FROM Weather w1, Weather w2
WHERE dateDiff(w1.recordDate,w2.recordDate) = 1 AND w1.temperature > w2.temperature;
