use warehouse; 
 
--  Question 1 : Find the item with minimum weight

Select itemno, descriptions, weight from items where 
weight = ( select min(weight) from items) ;
 
-- Question 2 : Different warehouses in Pune

select wid,Wname from warehouses where Location IN("Pune");

-- Question no 3 : details of the items ordered by "Mr Patil"
 select o.ono,  i.itemno, c.cname , descriptions 
    from customer c
    join orders o on 
		c.cno = o.cno
	join items i on
		o.ono = i.ono
	where c.cname = "Mr.Patil";
   
    -- Question No 4 : maximum store of a warehouse 
    SELECT * FROM WAREHOUSES WHERE WID = (SELECT WID FROM STORES GROUP BY WID ORDER BY COUNT(location) DESC LIMIT 1);
    
-- Question no 5 : item which is ordered minimum number of times

SELECT i.itemno , i.descriptions , o.ono, COUNT(i.itemno) item_count
FROM items i
JOIN orders o
ON i.ono=o.ono
GROUP BY itemno
ORDER BY item_count
LIMIT 1;

-- Question no 6 : detailed orders for each customer 
    
SELECT c.cno, c.cname, descriptions, o.odate
FROM customer c 
JOIN orders o on
	c.CNO = o.cno
join items i on 
	i.ono = o.ono;

