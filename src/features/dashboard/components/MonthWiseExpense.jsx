import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { formatCurrency } from "../../../utils/formatCurrency";

function MonthWiseExpense({ width, data }) {
  return (
    <ResponsiveContainer
      width={width}
      height={300}
      className="mx-2 mt-4 cursor-pointer md:self-stretch"
    >
      <AreaChart data={data}>
        <defs>
          <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="month" />

        <YAxis tickFormatter={(value) => `₹${value / 1000}k`} />

        <Tooltip content={<CustomTooltip />} />

        <Area
          type="monotone"
          dataKey="expense"
          stroke="#3b82f6"
          strokeWidth={2}
          fill="url(#expenseGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="w-32 rounded bg-neutral-950 p-3">
      <p className="text-sm text-neutral-400">{label}</p>

      <p className="font-medium">{formatCurrency(payload[0].value)}</p>
    </div>
  );
}

export default MonthWiseExpense;
