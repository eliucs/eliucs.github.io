**Technologies Used** JavaScript, Node, Wikipedia API, SQLite

This is an open source project based in Node and the Electron framework for using Wikipedia (English, text only, ~5,000,000 articles) on a Raspberry Pi to build a low-cost, Internet-free, education resource alternative. Wiki Pi represents Wikipedia as a graph, takes articles as parameters and traverses them based on user-defined text similarity and relevance thresholds to aggregate related articles, and then uses natural language processing techniques/algorithms including Porter's Stemmer to normalize text and a modified algorithm using tf-idf (term frequency-inverse document frequency) to perform text summarization and generate "course content".

