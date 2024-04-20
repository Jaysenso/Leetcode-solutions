# Write your MySQL query statement below
  
SELECT P.product_id, IFNULL(ROUND(SUM(P.price * units)/ SUM(units),2),0) as average_price
FROM Prices P LEFT JOIN UnitsSold US
ON P.product_id = US.product_id AND 
(US.purchase_date >= P.start_date AND US.purchase_date <= P.end_date)
GrOUP BY P.product_id

