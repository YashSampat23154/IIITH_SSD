Question 1 : Write a bash script that takes path of a text file containing some alphanumeric text as input and filters out its content to print only those words that start with ‘a’ (case insensitive) and do not end with ‘txt’ (case insensitive).

• Input Constraints – The path will be a valid file path (it can be absolute or relative) and the file will be a text file. The file will contain only alphanumeric characters.

• Output Constraints – Print each word satisfying criteria on a new line.

To run q1 : 

bash ./q1.sh filePath

<br/><br/>

Question 2 : Write a bash script that takes a directory path as input and prints list of all files that the current user has permission to execute, and member of other group does not have permission to read.

• Input Constraints – The path will be a valid directory path (can be absolute or relative).

• Output Constraints – Print only the file name (without preceding path). For example, if the file is /home/user/file.txt then print only file.txt.

To run q2 : 

bash ./q2.sh folderPath
