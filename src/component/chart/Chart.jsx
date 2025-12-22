import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie } from "recharts";
import useAuth from "../../hook/useAuth";
import useAxiosSEcure from "../../hook/useAxiosSecure";
import Loader from "../spinner/Loader";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
//   { name: "Group E", value: 278 },
//   { name: "Group F", value: 189 },
// ];

// #endregion
export default function StraightAnglePieChart({ isAnimationActive = true }) {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSEcure();

  const { data: pieData, isLoading } = useQuery({
    queryKey: ["pieChartData"],
    queryFn: async () => {
      // Simulate API call
      const res = await axiosSecure.get(`/pie-chart-data?email=${user?.email}`);
      const formattedData = res.data.map((item) => ({
        name: item._id,
        value: item.totalAmount,
      }));
      return formattedData;
    },
  });

  if (isLoading || loading) {
    return <Loader />;
  }

  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        aspectRatio: "16/9",
      }}
      responsive
    >
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={pieData}
        cx="50%"
        cy="100%"
        outerRadius="120%"
        fill="#0ea5e9"
        label
        isAnimationActive={isAnimationActive}
      />
    </PieChart>
  );
}
