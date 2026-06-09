import styles from "./recurring-expenses-section.module.css";

interface Props { className?: string; recurring?: any[]; }

export function RecurringExpensesSection({ className, recurring = [] }: Props) {
  if (recurring.length === 0) return null;

  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.title}>Recurring Monthly Expenses</div>
      <div className={styles.items}>
        {recurring.map(e => (
          <div key={e.id} className={styles.item}>
            <div className={styles.left}>
              <div className={styles.desc}>{e.description}</div>
              <div className={styles.day}>Bills on day {e.dayOfMonth} of each month ({e.type.replace(/_/g, " ")})</div>
            </div>
            <div className={styles.right}>
              <span className={styles.amount}>${Number(e.amount).toFixed(2)}/mo</span>
              <input type="checkbox" className={styles.toggle} defaultChecked={e.isActive} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
