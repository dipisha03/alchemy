
INSERT INTO alchemy_table (username, gender, age, sign, photo);

SELECT * FROM alchemy_table;

INSERT INTO alchemy_match 
SELECT id 
FROM alchemy_table
WHERE sign=aries AND possibleMatch in{"aries", "leo", "sagittarius", "gemini", "libra", "aquarius"},
WHERE sign=leo AND possibleMatch in{"aries", "leo", "sagittarius", "gemini", "libra"},
WHERE sign=sagittarius AND possibleMatch in{"aries", "leo", "sagittarius", "gemini", "libra", "aquarius"},
WHERE sign=taurus AND possibleMatch in{"taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"},
WHERE sign=virgo AND possibleMatch in{"taurus", "virgo", "capricorn", "cancer", "scorpio"},
WHERE sign=capricorn AND possibleMatch in{"taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"},
WHERE sign=gemini AND possibleMatch in{"aries", "leo", "gemini", "libra", "aquarius"},
WHERE sign=libra AND possibleMatch in{"leo", "sagittarius", "gemini", "libra", "aquarius"},
WHERE sign=aquarius AND possibleMatch in{"aries", "leo", "sagittarius", "gemini", "libra", "aquarius"},
WHERE sign=cancer AND possibleMatch in{"taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"},
WHERE sign=scorpio AND possibleMatch in{"taurus", "virgo", "capricorn", "cancer", "scorpio", "pisces"},
WHERE sign=pisces AND possibleMatch in{"taurus", "capricorn", "cancer", "scorpio", "pisces"};