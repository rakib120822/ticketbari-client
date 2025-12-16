import { useQuery } from "@tanstack/react-query";
import useAxiosSEcure from "../../../hook/useAxiosSecure";
import { toast } from "react-toastify";

const AdminUsersManage = () => {
  const axiosSecure = useAxiosSEcure();

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
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
        toast.success(`Role updated to ${role}`);
        refetch();
      }
    } catch (error) {
      toast.error("Failed to update role");
      console.log(error);
    }
  };

  const handleFraudToggle = async (id, isFraud, email) => {
    try {
      const res = await axiosSecure.patch(`/users/${id}/fraud?email=${email}`, {
        isFraud,
      });
      if (res.data.modifiedCount > 0) {
        toast.success(
          isFraud ? "Vendor marked as fraud" : "Vendor recovered successfully"
        );
        refetch();
      }
    } catch (error) {
      toast.error("Failed to update fraud status");
      console.log(error);
    }
  };

  if (isLoading) {
    return <div className="text-center mt-10">Loading users...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">👥 Manage Users</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Vendor Action</th>
              <th>Fraud Control</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className={user.isFraud ? "opacity-50" : ""}>
                <td>{index + 1}</td>
                <td>{user.displayName || "N/A"}</td>
                <td>{user.email}</td>
                <td className="capitalize font-semibold">{user.role}</td>

                {/* Admin */}
                <td>
                  {user.role === "admin" ? (
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleRoleChange(user._id, "user")}
                    >
                      Remove Admin
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleRoleChange(user._id, "admin")}
                    >
                      Make Admin
                    </button>
                  )}
                </td>

                {/* Vendor */}
                <td>
                  {user.role === "vendor" ? (
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => handleRoleChange(user._id, "user")}
                    >
                      Remove Vendor
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => handleRoleChange(user._id, "vendor")}
                      disabled={user.isFraud}
                    >
                      Make Vendor
                    </button>
                  )}
                </td>

                {/* Fraud */}
                <td>
                  {user.role === "vendor" && (
                    <>
                      {!user.isFraud ? (
                        <button
                          className="btn btn-sm btn-error"
                          onClick={() =>
                            handleFraudToggle(user._id, true, user.email)
                          }
                        >
                          Mark as Fraud
                        </button>
                      ) : (
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() =>
                            handleFraudToggle(user._id, false, user.email)
                          }
                        >
                          Remove Fraud
                        </button>
                      )}
                    </>
                  )}

                  {user.isFraud && (
                    <span className="ml-2 text-red-500 font-semibold">
                      Fraud
                    </span>
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
