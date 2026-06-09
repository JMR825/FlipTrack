import { useFetcher } from "react-router";
import { IconSparkles, IconLoader2 } from "@tabler/icons-react";
import styles from "./ai-insights-panel.module.css";
import { useEffect } from "react";

interface Props { className?: string; }

export function AIInsightsPanel({ className }: Props) {
  const fetcher = useFetcher<{ text: string, error?: string }>();
  
  const generateInsights = () => {
    fetcher.submit({ intent: "generate" }, { method: "post", action: "/api/insights" });
  };
  
  const isLoading = fetcher.state !== "idle";
  const insights = fetcher.data?.text;
  const error = fetcher.data?.error;

  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.header}>
        <div className={styles.titleWrap}>
          <IconSparkles size={18} className={styles.icon} />
          <span className={styles.title}>AI Coach Insights</span>
        </div>
        <button className={styles.generateBtn} onClick={generateInsights} disabled={isLoading}>
          {isLoading ? <IconLoader2 size={14} className={styles.spin} /> : "Generate Insights"}
        </button>
      </div>
      
      <div className={styles.content}>
        {!insights && !isLoading && !error && (
          <p className={styles.emptyText}>Get personalized business recommendations powered by Groq Llama 3 based on your sales, inventory, and expenses data.</p>
        )}
        {isLoading && (
          <div className={styles.loadingState}>
            <IconLoader2 size={24} className={styles.spin} />
            <p>Analyzing your business data...</p>
          </div>
        )}
        {error && (
          <p className={styles.errorText}>Error: {error}</p>
        )}
        {insights && !isLoading && (
          <div className={styles.insightsList}>
            {insights.split('\n').filter(line => line.trim().length > 0).map((line, i) => (
              <p key={i} className={styles.insightItem}>
                {line.replace(/^[-*•]\s*/, '')}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
