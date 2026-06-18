import "../styles/TopCategories.css";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Programming Books", value: 45 },
  { name: "Story Books", value: 28 },
  { name: "Business Books", value: 20 },
  { name: "Novels", value: 15 },
  { name: "Science Books", value: 12 }
];

const COLORS = [
  "#6C4DF6",
  "#4F8EF7",
  "#22C55E",
  "#F59E0B",
  "#FACC15"
];

function TopCategories() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="chart-card">
      <h3>Top Categories</h3>

      <div className="chart-content">
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <ul className="category-list">
          {data.map((item, index) => (
            <li key={index}>
              <div className="category-left">
                <span
                  className="color-dot"
                  style={{ backgroundColor: COLORS[index] }}
                ></span>

                <span className="category-name">
                  {item.name}
                </span>
              </div>

              <span className="percentage">
                {item.value} (
                {((item.value / total) * 100).toFixed(1)}
                %)
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopCategories;