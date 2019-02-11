
DROP KEYSPACE IF EXISTS faker;

CREATE KEYSPACE faker WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor':1};

USE faker;

CREATE TABLE fakertable (
  id  INT PRIMARY KEY,
  vs TEXT,
  city TEXT,
  team TEXT,
  teamlogo TEXT,
  week INT,
  date TEXT,
  opponent TEXT,
  opponentlogo TEXT,
  result TEXT,
  winloss TEXT,
  wl TEXT,
  link TEXT,
  playerpass TEXT,
  playerrush TEXT,
  playerrec  TEXT,
  pass INT,
  rush INT,
  rec INT
);