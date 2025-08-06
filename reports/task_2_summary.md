
### Task 2 Summary Report: Change Point Modeling and Insight Generation on Brent Oil Prices

#### Overview

The goal of this analysis was to identify significant structural breaks in Brent oil price behavior over time using a Bayesian Change Point detection model. This approach enables us to detect statistically significant changes in the mean returns of Brent oil prices and link these shifts to major geopolitical and economic events.

---

#### Key Findings

1. **Change Point Detection:**

   * The Bayesian Change Point model identified the most probable change point around index **1309**, which corresponds to the date **February 24, 2020**.
   * This date marks a statistically significant shift in the average daily log returns of Brent oil prices.

2. **Model Diagnostics and Convergence:**

   * The model's parameters converged well, with most Gelman-Rubin statistics (r\_hat) near 1.0, except for some caution with the `tau` parameter (r\_hat = 1.5591), indicating moderate uncertainty around the exact change point date.
   * Trace plots and posterior distributions show distinct shifts in mean returns and volatility before and after the change point.

3. **Quantitative Impact:**

   * Mean daily log return **before** the change point: approximately **0.00010**
   * Mean daily log return **after** the change point: approximately **0.00073**
   * This corresponds to an estimated increase in average return of about **0.06% per day** post-change point.
   * Volatility (measured by sigma) also increased significantly after the change point, indicating higher market uncertainty.

4. **Event Correlation:**

   * Comparing the detected change point date to key events around this period revealed three major relevant occurrences within ±90 days:

     * **March 6, 2020:** OPEC+ failed to agree on production cuts.
     * **April 2, 2020:** COVID-19 demand collapse impacted Brent crude prices.
     * **April 12, 2020:** OPEC+ agreed to a record production cut.
   * The change point aligns closely with these events, especially the failure of OPEC+ to cut production and the onset of the COVID-19 pandemic's economic impacts on oil demand.

---

#### Interpretation and Insights

* The detected change point reflects a critical structural break in the Brent oil market driven by a combination of geopolitical and economic shocks in early 2020.
* The increase in average returns and volatility after the change point reflects market reactions to unprecedented supply and demand shocks.
* While this analysis identifies a strong statistical correlation between these events and price behavior shifts, it does **not establish causality**. External factors and complex market dynamics should also be considered.
* Investors and policymakers should consider these findings as a part of a broader risk management and strategic planning framework that incorporates geopolitical event monitoring.

---

#### Limitations and Future Work

* The model currently detects a single change point; however, multiple structural breaks might exist across the entire dataset and warrant a more complex multiple change point model.
* Incorporating additional explanatory variables such as macroeconomic indicators, currency exchange rates, and global economic data could enhance understanding of the drivers behind price changes.
* Further validation using alternative models (e.g., VAR or Markov-switching) could provide complementary insights into market regimes and price dynamics.

---

### Visuals Attached:

* Posterior distributions and trace plots for model parameters.
* Log returns series with the detected change point annotated.
* Table of relevant events close to the detected change point date.

---

