DROP KEYSPACE IF EXISTS schedule;

CREATE KEYSPACE schedule WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor':1};

USE schedule;

CREATE TABLE stats (
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
