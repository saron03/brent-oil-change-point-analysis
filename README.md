#  Brent Oil Price Change Point Analysis

## Project Objective
Analyze how major global events affect Brent oil prices using **Bayesian change point detection**. The goal is to help investors, policymakers, and energy companies understand how events like political decisions, sanctions, and OPEC policies cause price shifts.

---

## Business Context
You are a data scientist at **Birhan Energies**, a consultancy for the global energy sector. Your job is to:
- Detect key events that caused major price changes
- Quantify their impact on oil prices
- Present results for smart investment, policy, and planning decisions

---

## Data Summary
- **Brent Oil Prices** (Daily): From **May 1987 – Sep 2022**
  - Fields: `Date`, `Price` (USD/barrel)
- **Event Dataset**: 15+ geopolitical and economic events (e.g., OPEC cuts, conflicts)

---

## Workflow Overview

### Task 1: Foundation
- Define analysis steps and assumptions
- Research and structure key global events
- Analyze time series properties: trend, stationarity
- Understand change point models

### Task 2: Change Point Modeling
- Use **PyMC3** to apply a Bayesian change point model
- Detect structural breaks in oil prices
- Link price shifts to real-world events
- Quantify the effect (e.g., % change in price before vs. after event)

### Task 3: Interactive Dashboard
- Build a web app using **Flask (backend)** + **React (frontend)**
- Display oil price trends, change points, and event impact
- Add filters, date ranges, and interactive charts

---

## Key Concepts & Tools
- **Bayesian Inference**
- **Monte Carlo Markov Chain (MCMC)**
- **Change Point Detection**
- **Time Series Analysis**
- **PyMC3**, **Pandas**, **Matplotlib**, **React**, **Flask**

---

## Timeline
- Discussion: July 30, 2025
- Interim Report Due: Aug 1, 2025
- Final Submission: Aug 5, 2025

---

## Learning Outcomes
- Model and interpret time series with change points
- Link statistical findings to real-world causes
- Build data apps that communicate insights clearly

---


## Final Deliverables
- Structured Brent oil & event dataset (CSV)
- Jupyter notebooks with full analysis
- Dashboard app (Flask + React)
- Clear, insight-focused report
