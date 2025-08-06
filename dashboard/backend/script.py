import pandas as pd
import ruptures as rpt
import json

df = pd.read_csv('analysis_results/log_returns.csv', parse_dates=['date'])
df = df.sort_values('date')
signal = df['log_return'].dropna().values[-1000:]  # last 1000 points only

algo = rpt.Binseg(model="l2").fit(signal)
result = algo.predict(n_bkps=5)

change_points = [df.iloc[i]['date'].strftime('%Y-%m-%d') for i in result[:-1]]

change_point_data = {
    "change_points": change_points,
    "method": "binseg_l2",
    "n_bkps": 5
}

with open('analysis_results/change_point.json', 'w') as f:
    json.dump(change_point_data, f, indent=2)

print("✅ change_point.json generated.")
