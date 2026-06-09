import styles from "./sales-summary-cards.module.css";

interface Props { className?: string; sales?: any[]; }

export function SalesSummaryCards({ className, sales = [] }: Props) {
  const totalSales = sales.length;
  
  let totalRevenue = 0;
  let totalProfit = 0;
  
  sales.forEach(s => {
    const salePrice = Number(s.salePrice);
    const cost = Number(s.inventoryItem.purchasePrice);
    totalRevenue += salePrice;
    totalProfit += (salePrice - cost);
  });
  
  const avgProfit = totalSales > 0 ? (totalProfit / totalSales) : 0;

  const cards = [
    { label: "Total Sales", value: totalSales.toString(), sub: "All time" },
    { label: "Total Revenue", value: `$${totalRevenue.toFixed(2)}`, sub: "All time" },
    { label: "Net Profit", value: `$${totalProfit.toFixed(2)}`, sub: "All time", positive: totalProfit >= 0 },
    { label: "Avg Profit/Sale", value: `$${avgProfit.toFixed(2)}`, sub: "All time", positive: avgProfit >= 0 },
  ];

  return (
    <div className={[styles.row, className].filter(Boolean).join(" ")}>
      {cards.map(c => (
        <div key={c.label} className={styles.card}>
          <div className={styles.label}>{c.label}</div>
          <div className={[styles.value, c.positive ? styles.positive : ""].join(" ")}>{c.value}</div>
          <div className={styles.sub}>{c.sub}</div>
        </div>
      ))}
    </div>
  );
}
