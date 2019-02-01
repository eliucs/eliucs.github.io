**Submitted To** MHacks 9 (University of Michigan, Ann Arbor)

**Winner** Best Use of .tech Domain (DotTech)

**Technologies Used** Python, Flask, NLTK, Scikit Learn, Newspaper API

Given all the recent news and controversies surrounding President Trump and his accusations of certain news sources being "fake news", we wanted to make a web application where you can check whether a certain article is fact or fiction. From the home page, you enter in the URL to a news article, and then the application will display whether or not the article is "True" or "Fake" and gives a percentage confidence for this classification.

We built this project in Python with the Flask framework, NLTK and Scikit Learn. We started by compiling a large bank of true news articles (for example, CSPAN, New York Times, Reuters) and fake news articles (for example, abcnews.com.co, nationalreport.net, infowars.com). We trained our model from these articles, which gave us the most likely words and their frequencies to show up in true and fake news articles respectively. Then using the Newspaper API, we parse out an HTML page to its plain text article form and tokenize this body of text by sentence. Applying our fact checking analysis function to each sentence and taking the mode of these values gives us whether or not the article is true or fake, and taking the ratio determines the confidence.
