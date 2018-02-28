
INSERT INTO alchemy_table (username, gender, age, sign, photo);

SELECT * FROM alchemy_table;

INSERT INTO alchemy_match 
SELECT id 
FROM alchemy_table
WHERE sign=aries AND possibleMatch in{"aries", "leo", "sagittarius", "gemini", "libra", "aquarius"},
WHERE sign=leo AND possibleMatch in{"aries", "leo", "sagittarius", "gemini", "libra"},
WHERE sign=sagittarius AND possibleMatch in{"aries", "leo", "sagittarius", "gemini", "libra", "aquarius"},
WHERE sign=taurus AND possibleMatch in{"taurus", "virgo", "capricorn", "cancer", "scorpio", "pieces"},
WHERE sign=virgo AND possibleMatch in{"taurus", "virgo", "capricorn", "cancer", "scorpio"},
WHERE sign=capricorn AND possibleMatch in{"taurus", "virgo", "capricorn", "cancer", "scorpio", "pieces"},
WHERE sign=gemini AND possibleMatch in{"aries", "leo", "gemini", "libra", "aquarius"},
WHERE sign=libra AND possibleMatch in{"leo", "sagittarius", "gemini", "libra", "aquarius"},
WHERE sign=aquarius AND possibleMatch in{"aries", "leo", "sagittarius", "gemini", "libra", "aquarius"},
WHERE sign=cancer AND possibleMatch in{"taurus", "virgo", "capricorn", "cancer", "scorpio", "pieces"},
WHERE sign=scorpio AND possibleMatch in{"taurus", "virgo", "capricorn", "cancer", "scorpio", "pieces"},
WHERE sign=pisces AND possibleMatch in{"taurus", "capricorn", "cancer", "scorpio", "pieces"};

// pulls out all matching signs based on user selection
var possiblesMatch = SELECT * FROM alchemy_match WHERE name='user-input'

// uses matching signs to find users 
SELECT * FROM alchemy_Table WHERE sign = possibleMatch
