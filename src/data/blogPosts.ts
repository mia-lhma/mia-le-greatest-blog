
import { BlogPost } from "../models/BlogPost";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Sentiment Analysis of 10-K Filings",
    date: "2025-03-21",
    excerpt: "This analysis examined whether short-term stock returns around 10-K filings correlate with various sentiment measures derived from company disclosures.",
    content: `
      <p>The three contextual sentiment measures (ESG, Innovation, and Government Policy) show varying relationships with returns. ESG sentiment exhibits a notable difference between positive and negative sentiments, suggesting that ESG disclosures are value-relevant and warrant further investigation.
      <p>Innovation sentiment, while consistently negative, indicates that innovation-related information might introduce uncertainty, making it a relevant factor for future research. Government Policy sentiment, with its near-zero impact, might be less value-relevant in the short term but could be important in specific contexts or over longer horizons.
      <h2> Sign and Magnitude</h2>
      
      <p>Version 1 (Day t): Immediate market reaction shows mixed signs for ML_Positive and consistently positive signs for ML_Negative. The magnitudes are small, indicating a limited immediate impact.

      <p>Version 2 (Day t to Day t+2): Slight increase in positive correlations for both ML_Positive and ML_Negative. This suggests that the short-term impact (over a few days) might amplify the initial reaction.

      <p>Version 3 (Day t+3 to Day t+10): Correlations for ML_Positive decrease slightly, indicating a potential fading of the initial positive impact. ML_Negative correlations remain relatively stable, suggesting a more sustained impact of negative sentiment over the medium term.  
      
      <h2>Conclusion</h2>
      
      <p>Incorporating different return measures shows that the impact of ML sentiment varies over time. ML_Positive sentiment has a more immediate but short-lived effect, while ML_Negative sentiment shows a more sustained positive impact on returns
          
    `,
    author: "Mia Le",
    coverImage: "/csv.png"
  },
  {
    id: "2",
    title: "Industry Patenting Trends",
    date: "2025-02-23",
    excerpt: "Average patent-level RETech across patents for each industry-year",
    content: `

      <h2>Industry Patenting Trends (1980‑2010)</h2>

      <p>You’ll first filter <code>firmyear_patstats</code> to six GIC sectors (15 Materials, 20 Industrials, 25 Consumer Discretionary, 35 Health Care, 40 Financials, 45 IT) and the years 1980‑2010.  
      After expanding firm‑years to the patent level, calculate the average patent‑level RETech for every industry‑year pair.</p>

      <p><strong>Checkpoint—Year 2000 averages</strong></p>

      <ul>
        <li>Materials (15): 0.72</li>
        <li>Industrials (20): 0.96</li>
        <li>Consumer Discretionary (25): 1.36</li>
        <li>Health Care (35): 1.54</li>
        <li>Financials (40): 2.57</li>
        <li>IT (45): 1.80</li>
      </ul>

      <p>Plot these industry averages as six “sparkline” line charts—one per sector—with no error bands, labeled axes, and sector names instead of numeric codes.</p>

      <h2>Outlier Treatment</h2>

      <p>Three versions of RETech are compared:</p>
      <ul>
        <li><em>Original</em></li>
        <li><em>Winsorized (full‑sample)</em> &nbsp;— trims 1st/99th percentiles globally</li>
        <li><em>Winsorized by Year</em> &nbsp;— trims 1st/99th inside each year</li>
      </ul>

      <p>Simple correlations with R&amp;D show the two winsorized series strengthen the relationship.  
      Regressions with year and industry fixed effects confirm the pattern persists when controls are added.</p>

      <h2>Key Insights</h2>

      <p><strong>A — Nature of Outliers</strong><br>
      Outliers weaken the RETech–R&amp;D link; they likely reflect noise, data errors, or one‑off tech spikes unconnected to sustained R&amp;D.</p>

      <p><strong>B — Why Year‑by‑Year Winsorization?</strong><br>
      Technology norms shift over time. A value that is extreme in 1980 can be routine by 2010, so year‑specific trimming respects the evolving distribution.</p>

      <p><strong>C — Robustness After Controls</strong><br>
      The RETech–R&amp;D relationship survives industry and time adjustments, implying it is not driven solely by sector composition or secular trends.</p>

      <p><strong>D — When Prefer Year‑Specific Winsorization?</strong><br>
      Use it when the data‑generating process drifts—e.g., inflation, regulatory changes, tech adoption curves—so that outlier cut‑offs stay era‑appropriate.</p>

    `,
    author: "Mia Le",
    coverImage: "/plot.png"
  },
  {
    id: "3",
    title: "Open Asset Pricing",
    date: "2025-05-02",
    excerpt: "This study aims to construct robust composite signals using a number of financial predictors and assess their predictive stability in varying market states and investment horizons.",
    content: `
      <h2>Big‑Picture Question</h2>

      <p>Is equity performance driven mainly by a handful of classic factors (value, momentum, quality), or can aggregating many individually weak yet significant signals into composites materially raise return predictability, portfolio stability, and timing across economic regimes?</p>

      <h2>Specific Research Questions</h2>

      <p>• Which financial signals most affect a stock’s survival probability (i.e., avoiding major crashes)?<br>
      • How does each signal’s predictive power decay over 1‑, 3‑, and 6‑month horizons?<br>
      • Do dynamically weighted composites beat single signals on average return and Sharpe ratio?<br>
      • How does composite strength shift across regimes (pre‑crisis, post‑crisis, etc.)?<br>
      • Does survival modeling surface different risk factors than return regressions?<br>
      • Which ML models best harvest composite power under changing regimes?</p>

      <h2>Hypotheses</h2>

      <p>H1 — Composites will deliver higher returns, better Sharpe ratios, and lower volatility than any single signal.<br>
      H2 — Weighting inputs by t‑stats, hazard ratios, or risk scores will boost overall precision.<br>
      H3 — Individual‑signal power fades with horizon, but well‑built composites remain robust up to 12 months.<br>
      H4 — Adaptive models (e.g., XGBoost) will outperform static models across regimes.</p>

      <h2>Necessary Data</h2>

      <p>Monthly firm‑level panel (Aug 2001 – Dec 2023) containing:<br>
      • Signal name, quality rating, t‑stat, portfolio returns, dates.<br>
      • Y = next‑month returns; X’s = lagged predictors.<br>
      Enhanced for four analyses: signal engineering, regime splits (2001‑07 / 2008‑15 / 2016‑23), survival labels (50 % crash or delist), and signal‑decay windows (1/3/6‑month cumulative returns).</p>

      <h2>Current Data Sources</h2>

      <p><strong>Open‑Source Asset Pricing (OpenAP)</strong> – cross‑sectional predictors and firm‑level signals.<br>
      <strong>CRSP</strong> – returns, prices, shares, delisting info.</p>

      <h2>Description of Output</h2>

      <p>An interactive dashboard that<br>
      • ranks composite‑signal performance,<br>
      • highlights dominant attributes,<br>
      • visualises decay curves,<br>
      • shows firm‑level survival odds,<br>
      • tracks model robustness across regimes.</p>

    `,
    author: "Mia Le",
    coverImage: "/3.png"
  }
];
