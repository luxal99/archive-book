# Archive book mini project

## How to start ?

### Create database

```sql
create
database archive_book;
use
archive_book;
```

#### Insert DDL

```sql
CREATE TABLE `document`
(
    `id`   int          NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `uri`  varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `location`
(
    `id`   int          NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `mark`
(
    `id`          int          NOT NULL AUTO_INCREMENT,
    `name`        varchar(255) NOT NULL,
    `id_location` int          NOT NULL,
    PRIMARY KEY (`id`),
    KEY           `FK_f55b6a6f7bf7aa22c9b866aaa95` (`id_location`),
    CONSTRAINT `FK_f55b6a6f7bf7aa22c9b866aaa95` FOREIGN KEY (`id_location`) REFERENCES `location` (`id`)
);

create table archive_book
(
    id           int auto_increment
        primary key,
    created_date timestamp default CURRENT_TIMESTAMP null,
    title        varchar(255) not null,
    note         varchar(10240) null,
    id_mark      int          not null,
    id_location  int          not null,
    shelfNo      varchar(255) not null,
    constraint FK_559288b31d8b88f933fc3fd513f
        foreign key (id_location) references location (id),
    constraint FK_f1579be39e8673f41cca5a0b92a
        foreign key (id_mark) references mark (id)
);


```

1. Setup your local credentials for .evn
2. DB_USERNAME=db_local_username
3. DB_PASSWORD=local_db_password
4. DB_NAME should be archive_book

### Setup archiveBook path

1. Open file

```
src/server/constant/constant.ts
```

2. Path should include this part

```
UPLOAD_PATH=Absolute-path-to-project-folder/src/public/documents/...
DELETE_PATH=Absolute-path-to-project-folder/src/public...
```

### After this steps you should install npm packages

1. ```npm
   npm i
   ```
2. ```npm
   yarn install
   ```

### Final step

```cli
nest build && nest start
```

After this steps you can open browser and open http://localhost:8080
