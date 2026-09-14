import { Container } from "@watch-company/ui";

import "./StatisticsStrip.css";

const statistics = [
  { value: "5+", label: "Iconic brands in our group" },
  { value: "100+", label: "Years of watchmaking heritage" },
  { value: "Global", label: "Presence in key markets" },
  { value: "Growing", label: "Community of connected users" },
] as const;

export function StatisticsStrip() {
  return (
    <section aria-label="Festina Group at a glance" className="statistics-strip">
      <Container className="statistics-strip__inner">
        <div className="statistics-strip__message">
          A brighter tomorrow together
        </div>
        <dl className="statistics-strip__list">
          {statistics.map((statistic) => (
            <div className="statistics-strip__item" key={statistic.label}>
              <dt>{statistic.value}</dt>
              <dd>{statistic.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

