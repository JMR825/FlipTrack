import { useEffect } from "react";

export default function WellKnownRoute() {
  // This route exists only to avoid react-router dev environment config
  // failing when Chrome/DevTools probes .well-known/* requests.
  // Return a minimal 200 page.
  useEffect(() => {
    // no-op
  }, []);

  return (
    <div style={{ padding: 16, fontFamily: "sans-serif" }}>
      OK
    </div>
  );
}

