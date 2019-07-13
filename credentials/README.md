# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases.

# Important SSH & DB info.

1. Server URL: ec2-18-216-80-193.us-east-2.compute.amazonaws.com
2. SSH username: ubuntu
3. SSH key: 648_Key.pem
4. Database URL and port: csc648.crgiewgyesqb.us-east-2.rds.amazonaws.com | 3306
5. Database username: admin
6. Database password: csc648_team4
7. Database name: csc648_db


# How to Log Into the Server
## OSX/Linux
   1. Download server key "648_Key.pem"
   2. Change into the directory where key is stored
   3. Run command "sudo ssh -i "648_Key.pem" ubuntu@ec2-18-216-80-193.us-east-2.compute.amazonaws.com"
   4. Viola, you are in!
    
## Windows
   1. Download Putty
   2. Rebuild 648_Key.pem to 648_Key.ppk by PuTTYgen
   3. Enter hostname as "ec2-18-216-80-193.us-east-2.compute.amazonaws.com"
   4. make sure the category you selected is SSH
   5. Select genertated "648_Key.ppk"
   6. Click "Open"
   7. Voila, you are in!
    
    


