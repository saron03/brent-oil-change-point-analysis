from flask import Flask, jsonify, send_file
import pandas as pd
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow React to fetch data

# Load precomputed data
log_returns_df = pd.read_csv('analysis_results/log_returns.csv', parse_dates=['date'])
events_df = pd.read_csv('analysis_results/events.csv', parse_dates=['Date'])

with open('analysis_results/change_point.json', 'r') as f:
    change_point_data = json.load(f)

@app.route('/api/log-returns')
def get_log_returns():
    return log_returns_df.to_json(orient='records', date_format='iso')

@app.route('/api/change-point')
def get_change_point():
    return jsonify(change_point_data)

@app.route('/api/events')
def get_events():
    return events_df.to_json(orient='records', date_format='iso')

@app.route('/')
def index():
    return "Brent Oil Change Point API is running."

if __name__ == '__main__':
    app.run(debug=True)
