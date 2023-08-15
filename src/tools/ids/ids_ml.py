import pandas as pd
import numpy as np
import collections
import joblib
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score
from sklearn.tree import DecisionTreeClassifier

dataset = pd.read_csv('BotNeTIoT-L01_label_NoDuplicates.csv')
dataset = dataset.to_numpy()

print('The shape of dataset: ')
print(dataset.shape)


X = dataset[:, 0: -1]
Y = dataset[:, -1]
print('\nThe shape of X: ')
print(X.shape)
print('\nThe shape of Y: ')
print(Y.shape)


x_train, x_test, y_train, y_test = train_test_split(X, Y, test_size = 0.3, random_state = 50)


xgb_model = DecisionTreeClassifier().fit(x_train, y_train)

training_score = accuracy_score(xgb_model.predict(x_train), y_train)
testing_score = accuracy_score(xgb_model.predict(x_test), y_test)

print('Training score: ')
print(training_score)
print('Testing score: ')
print(testing_score)


print('Saving the model...')
joblib.dump(xgb_model, 'model.joblib')
print('The model was saved successfully!')
