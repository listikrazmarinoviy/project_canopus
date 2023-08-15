import os
import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier


model = joblib.load('model.joblib')

test_file = 'test_wireshark.pcapng'
file = open(test_file, 'r')

print(model.predict(file))