CREATE DEFINER=`root`@`localhost` PROCEDURE `GetClientsByFilter`(
	IN  lastVisitMonth INT,
	IN  birthdayMonth INT,
	IN 	activity VARCHAR(250)
)
BEGIN
	SELECT CLIE.id,CLIE.firstName,CLIE.lastName,DATE_FORMAT(CLIE.birthdayDate,'%d/%m/%Y') AS birthdayDate ,DATE_FORMAT(ACTI.activityDate,'%d/%m/%Y') AS lastActivityDate,ACTI.description 
    
    FROM 
    examen_lilab.clients CLIE
    LEFT JOIN examen_lilab.activities ACTI
    ON CLIE.id = ACTI.clientId
    WHERE 
    	(ACTI.id IN (
		SELECT id FROM examen_lilab.activities AS A 
        WHERE 
        (MONTH(A.activityDate) = lastVisitMonth OR lastVisitMonth IS NULL)
        AND 
        (A.description LIKE  CONCAT('%', activity, '%') OR activity IS NULL)
        AND A.active = 1
        AND A.activityDate = (SELECT MAX(activityDate) FROM  examen_lilab.activities AS B WHERE B.clientId = A.clientId)
        ORDER BY activityDate DESC
    )
    )
    AND (MONTH(CLIE.birthdayDate) = birthdayMonth OR birthdayMonth IS NULL  )
    AND CLIE.active = 1 
    ORDER BY ACTI.activityDate DESC;
END