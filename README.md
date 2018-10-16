## usage

### init
 
 - please edit project-name in npm script
 - please edit database-name in npm script
 - please edit db-migrate-driver in package.json
 - please npm install
 - please edit database.json
#
### migrations
use db-migrate  

create migrate-file  
```> npx db-migrate create file-name --sql-file```

migrate init  
```> npm run migrate/init```

migrate up  
```> npm run migrate/up```

migrate down  
```> npm run migrate/down```

migrate reset  
```> npm run migrate/reset```

#
### webpack
build  
```> npm run build```

watch  
```> npm run watch```
#
### start server
start  
```> npm start```

test  
```> npm test```

default port is 3000  
if you want to change the port, please edit nodemon.json.
#