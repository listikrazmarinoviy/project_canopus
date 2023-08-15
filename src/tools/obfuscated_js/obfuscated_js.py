import os
import joblib

from sklearn.feature_extraction.text import HashingVectorizer, TfidfTransformer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.pipeline import Pipeline


js_path = "JavascriptSamples"
obfuscated_js_path = "JavascriptSamplesObfuscated"

corpus = []
labels = []
file_types_and_labels = [(js_path, 0), (obfuscated_js_path, 1)]


for files_path, label in file_types_and_labels:
    files = os.listdir(files_path)
    for file in files:
        file_path = files_path + '/' + file
        try:
            with open(file_path, 'r') as myfile:
                data = myfile.read().replace('\n', '')
                data = str(data)
                corpus.append(data)
                labels.append(label)
        except Exception as e:
            print(e)

print(len(corpus))
print(len(labels))


X_train, X_test, y_train, y_test = train_test_split(
    corpus, labels, test_size = 0.3, random_state = 40)

text_clf = Pipeline(
    [
        ('vect', HashingVectorizer(input = 'content', ngram_range = (1, 3))),
        ('tfidf', TfidfTransformer(use_idf = True, )),
        ('rf', RandomForestClassifier(class_weight = 'balanced'))
    ]
)


text_clf.fit(X_train, y_train)
y_test_pred = text_clf.predict(X_test)

print('\nAccuracy score: ')
print(accuracy_score(y_test, y_test_pred))
print('Confusion matrix: ')
print(confusion_matrix(y_test, y_test_pred))

print('\nSaving the model...')
joblib.dump(text_clf, 'model.joblib')
print('Model successfully saved!')

#test_js = 'JavascriptSamplesObfuscated/accept-terms-saga-obfuscated.js'
#file = open(test_js, 'r')

#print(text_clf.predict(file))
