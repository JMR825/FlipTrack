import styles from "./one-time-expenses-table.module.css";

interface Props { className?: string; expenses?: any[]; }

export function OneTimeExpensesTable({ className, expenses = [] }: Props) {
  if (expenses.length === 0) {
    return <div className={[styles.wrap, className].filter(Boolean).join(" ")}><p style={{padding: '1rem', color: 'var(--color-text-secondary)'}}>No one-time expenses logged yet.</p></div>;
  }

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Date</th>
            <th className={styles.th}>Description</th>
            <th className={styles.th}>Category</th>
            <th className={styles.th}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(e => (
            <tr key={e.id} className={styles.tr}>
              <td className={styles.td}>{new Date(e.date).toLocaleDateString()}</td>
              <td className={styles.td}>{e.description || "—"}</td>
              <td className={styles.td}><span className={styles.catBadge}>{e.type.replace(/_/g, " ")}</span></td>
              <td className={styles.td}><span className={styles.amount}>${Number(e.amount).toFixed(2)}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
