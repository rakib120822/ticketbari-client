import { useQuery } from "@tanstack/react-query";
import useAxiosSEcure from "../../../hook/useAxiosSecure";
import { toast } from "react-toastify";


const AdminUsersManage = () => {
  const axiosSecure = useAxiosSEcure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleRoleChange = async (id, role) => {
    try {
      const res = await axiosSecure.patch(`/users/${id}/role`, { role });
      if (res.data.modifiedCount > 0) {
        toast.success(`User is now ${role}`);
        refetch();
      }
    } catch {
      toast.error("Action failed");
    }
  };

  const handleMarkFraud = async (id) => {
    try {
      const res = await axiosSecure.patch(`/users/${id}/fraud`);
      if (res.data.modifiedCount > 0) {
        toast.success("Vendor marked as fraud");
        refetch();
      }
    } catch {
      toast.error("Failed to mark fraud");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Make Vendor</th>
              <th>Fraud</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className={user.isFraud ? "opacity-50" : ""}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="capitalize">{user.role}</td>

                <td>
                  <button
                    className="btn btn-sm btn-success"
                    disabled={user.role === "admin"}
                    onClick={() => handleRoleChange(user._id, "admin")}
                  >
                    Make Admin
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-sm btn-info"
                    disabled={user.role === "vendor"}
                    onClick={() => handleRoleChange(user._id, "vendor")}
                  >
                    Make Vendor
                  </button>
                </td>

                <td>
                  {user.role === "vendor" && !user.isFraud && (
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => handleMarkFraud(user._id)}
                    >
                      Mark as Fraud
                    </button>
                  )}

                  {user.isFraud && (
                    <span className="text-red-500 font-semibold">Fraud</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsersManage;
