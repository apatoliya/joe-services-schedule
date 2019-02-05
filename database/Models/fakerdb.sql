DROP DATABASE IF EXISTS faker;

CREATE DATABASE faker;
USE faker;
CREATE TABLE fakertable (
  id INT NOT NULL,
  vs VARCHAR(75),
  city VARCHAR(75),
  team VARCHAR(200),
  teamlogo VARCHAR(200),
  week INT,
  date VARCHAR(50),
  opponent VARCHAR(100),
  opponentlogo VARCHAR(200),
  result VARCHAR(50),
  winloss VARCHAR(50),
  wl VARCHAR(40),
  link VARCHAR(200),
  playerpass VARCHAR(50),
  playerrush VARCHAR(50),
  playerrec  VARCHAR(50),
  pass INT,
  rush INT,
  rec INT
)