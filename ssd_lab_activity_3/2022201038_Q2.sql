SELECT CONCAT(E.Fname, " ", Minit, " ", Lname) AS Name, Ssn, Dno, D.No_of_employee
FROM EMPLOYEE AS E, (SELECT DISTINCT Super_ssn, COUNT(Ssn) AS No_of_employee FROM EMPLOYEE WHERE Super_ssn IS NOT NULL
GROUP BY Super_ssn) AS D
WHERE E.Ssn = D.Super_ssn
ORDER BY D.No_of_employee ASC;
