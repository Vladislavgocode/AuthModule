"# AuthModule" 


"# Памятка БД ПРОГЕРА" 

CREATE TABLE user (
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

SELECT * FROM user

INSERT INTO user(name) VALUES("Владислав")

DELETE FROM user WHERE name="Элдор"

SELECT users.id, users.name, wallets.balance as balance FROM users LEFT JOIN wallets WHERE wallets.user_id = users.id
