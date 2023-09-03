import React from 'react'

import "./LearningPath.css";

import {Button} from "@mui/material"

export const LearningPath = () => {
  return (
    <div className = "background__image">
        
        <div className = "course__information">
            <h2 >Machine learning for cybersecurity</h2>
            <p>Estimated time: 5 hours</p>
            <br />
            <br />

            <p className = "sections__title">Preface</p>
            <br />

            <p>Welcome to the course of learning Artificial Intelligence
                for Cybersecurity!
            </p>
            <br />

            <p>Cyber threats today are one of the most vital problem 
                that every person or organization has to deal with. 
                In this course, we will use various Python libraries, 
                such as TensorFlow, Keras (probably, the most crucial 
                library for machine learning), scikit learn and others,
                to deal with the most common and popular challenges 
                faced by cybersecurity professionals.</p>
            

            <p className = "sections__title">What is this course about</p>
            <br />
            <p>This course will help you implement AI solutiuons to 
                existing cybersecurity challenges and problems, mainly
                using machine learning (ML) algorithms.
            </p>

            <p className = "sections__title">Who is this course for?</p>
            <br />
            <p>This course is for people who already have a basic knowledge 
                in machine learning and Artificial Intelligence. The study 
                of AI is out of scope of this course, but all the necessary 
                algorithms and terms that you should understand will be 
                explained during the course. By the end of this course, in 
                case if you thoroughly went through each chapter step by step,
                can guarantee that you will get knowledge on how to implement 
                machine learning to tackle cybersecurity problems.</p>

            <p className = "sections__title">Skills that you will get</p>
            <br />

            <div className = "skills__part">
                <p className = "skill">Basic knowledge of how to create a machine learning model</p>
            </div>
            <div className = "skills__part">
                <p className = "skill">Understanding of malware</p>
                <p className = "skill">IDS systems</p>
                <p className = "skill">Data security</p>
            </div>

            <div className = "start__course_button">
                <Button 
                onClick = ""
                variant = "text"
                color = "inherit"
                size = "large"
                >Start course
                </Button>
            </div>

        </div>

        <div className = "list__of_content">

            <h2>List of content</h2>
            <br />
            <br />

            <p>Lesson 1. Train-test-splitting your data</p> <br />
            <p>Lesson 2. Standardizing your data</p> <br />
            <p>Lesson 3. Summarizing large data using principal component analysis</p> <br />
            <p>Lesson 4. Generating text using Markov chains</p> <br />
            <p>Lesson 5. Performing clustering using scikit-learn</p> <br />
            <p>Lesson 6. Training an XGBoost classifier</p> <br />
            <p>Lesson 7. Analyzing time series using statsmodels</p> <br />
            <p>lesson 8. Anomaly detection with Isolation Forest</p> <br />
            <p>Lesson 9. Natural language processing using a hashing vectorizer 
                and tf-idf with scikit-learn</p> <br />
            <p>Lesson 10. Hyperparameter tuning with scikit-optimize</p> <br />
        </div>

    </div>
  )
}

export default LearningPath