import pandas as pd
import numpy as np
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

urls_data = pd.read_csv('malicious_phish.csv')
print(urls_data.head())


#data vectorization using TfidVectorizer
def makeTokens(f):
    tkns_BySlash = str(f.encode('utf-8')).split('/')
    total_Tokens = []
    for i in tkns_BySlash:
        tokens = str(i).split('-')
        tkns_ByDot = []
        for j in range(0, len(tokens)):
            temp_Tokens = str(tokens[j]).split('.')
            tkns_ByDot = tkns_ByDot + temp_Tokens
        total_Tokens = total_Tokens + tokens + tkns_ByDot
    total_Tokens = list(set(total_Tokens))
    if 'com' in total_Tokens:
        total_Tokens.remove('com')
    return total_Tokens

#labels
y = urls_data['type']
#features
url_list = urls_data['url']

vectorizer = TfidfVectorizer(tokenizer = makeTokens)
with open('vectorizer.pk', 'wb') as fin:
    pickle.dump(vectorizer, fin)

#store vectors into X variable as our xFeatures
X = vectorizer.fit_transform(url_list)

#data splitting
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 42)

#model building
logit = LogisticRegression()
logit.fit(X_train, y_train)

#accuracy score
print('Accuracy: ', logit.score(X_test, y_test))

print('Saving model...')
filename = 'model.sav'
pickle.dump(logit, open(filename, 'wb'))
print('Model saved successfully!')

X_predict = ['google.com/search=jsji']

X_predict = vectorizer.transform(X_predict)
New_predict = logit.predict(X_predict)
print(New_predict)
