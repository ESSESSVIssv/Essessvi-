import re

with open('src/constants.ts', 'r') as f:
    content = f.read()

# Let's fix missing fields in PROJECTS
content = content.replace("""    title: "Health Forecasting System",
    role: "Core Developer & Thesis Presenter",
    company: "Apollo University (Research Project)",
    period: "Oct 2024 – Dec 2024",
    description: "Designed and developed an epidemic time-series system using ARIMA models to analyze historical records, identify patterns, and map future disease outbreaks under the guidance of Dr. K. Sudheer.",
    points: [""", """    title: "Health Forecasting System",
    subtitle: "Epidemic Predictive Analytics",
    role: "Core Researcher",
    company: "Apollo University (Research Project)",
    period: "Oct 2024 – Dec 2024",
    description: "A time-series forecasting engine utilizing historical data to predict and map future disease outbreaks.",
    problem: "Healthcare responses are often reactive due to unpredictable epidemic patterns.",
    user: "Public health officials and researchers needing data-driven insights.",
    research: "Investigated 10,000+ rows of WHO public health data to find stationary patterns.",
    insight: "Historical epidemic data required significant preprocessing to be viable for predictive modelling.",
    product_decision: "Chose ARIMA time-series forecasting for its reliability with short-term trend prediction.",
    solution: "Processed data and developed an ARIMA model using Python to support data-driven public health research.",
    impact: "Achieved nearly 90% accuracy in short-term outbreak prediction.",
    learnings: "Deepened understanding of data preprocessing and the importance of data quality in predictive models.",
    next_steps: "Integrate real-time data feeds for continuous model updating.",
    status: "Completed",
    link: "#",
    points: [""")

with open('src/constants.ts', 'w') as f:
    f.write(content)
