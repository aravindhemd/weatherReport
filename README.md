

# database Name
testdb

# Create Table
CREATE TABLE `weather` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(500) NOT NULL,
  `temp` float NOT NULL,
  `feels_like` float NOT NULL,
  `temp_min` float NOT NULL,
  `temp_max` float NOT NULL,
  `req_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4


For Request Please Refer SampleImages
