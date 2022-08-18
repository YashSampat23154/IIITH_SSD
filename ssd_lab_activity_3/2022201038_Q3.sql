SELECT DISTINCT Essn AS Manager_ssn, COUNT(*) AS Number_of_projects
FROM WORKS_ON 
WHERE Essn IN(SELECT Mgr_ssn FROM DEPARTMENT WHERE Mgr_ssn IN(SELECT DISTINCT Essn FROM WORKS_ON  WHERE Pno = (SELECT DISTINCT Pnumber FROM PROJECT WHERE Pname = 'ProductY')))
GROUP BY Essn;