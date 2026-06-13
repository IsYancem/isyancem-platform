const stats = [
  {
    index: "01",
    value: "4",
    suffix: "+",
    label: "Años de experiencia",
    delay: "",
  },
  {
    index: "02",
    value: "15",
    suffix: "+",
    label: "Proyectos completados",
    delay: "d1",
  },
  {
    index: "03",
    value: "8",
    suffix: "+",
    label: "Tecnologías dominadas",
    delay: "d2",
  },
  {
    index: "04",
    value: "100",
    suffix: "%",
    label: "Compromiso",
    delay: "d3",
  },
];

export default function StatsSection() {
  return (
    <section
      className="section wrap"
      id="stack"
      data-screen-label="Stats"
      style={{ paddingTop: 0 }}
    >
      <div className="stats">
        {stats.map((stat) => (
          <div
            key={stat.index}
            className={`stat reveal ${stat.delay}`}
            data-num={stat.value}
            data-suffix={stat.suffix}
          >
            <div className="k">
              <span className="sq" />
              {stat.index}
            </div>

            <div className="num">
              <span className="val">0</span>
              <span className="u">{stat.suffix}</span>
            </div>

            <div className="lab">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}