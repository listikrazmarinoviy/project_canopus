import os
import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier


model = joblib.load('model.joblib')

test_js = 'JavascriptSamplesObfuscated/accept-terms-saga-obfuscated.js'
file = open(test_js, 'r')

print(model.predict(file))