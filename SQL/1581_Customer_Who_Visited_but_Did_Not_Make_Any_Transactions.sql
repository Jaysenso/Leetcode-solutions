# Write your MySQL query statement below

# COUNT function counts the number of visits 
SELECT v.customer_id, COUNT(v.visit_id) as count_no_trans

# we then use LEFT JOIN to join the 2 tables and return the rows from the left
# and the matching rows from the right 
FROM Visits v LEFT JOIN TRANSACTIONS t ON v.visit_id = t.visit_id
WHERE t.amount is NULL

# Groupby is vital here - without it, the count function would simply count the number of 
# rows in the entire table that match the condition in the WHERE clause, without  
# distinguishing # between customers
GROUP BY v.customer_id
