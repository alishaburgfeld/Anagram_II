# Don't forget to run the tests (and create some of your own)

def anagrams_for(word, list_of_words):
	answer=list()
	for item in list_of_words:
		if sorted(list(item))==sorted(list(word)):
			answer.append(item)
	return answer