import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hook/useAxiosSecure";

const AddTicket = () => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();

  const handleAddTicket = (data) => {
    axiosSecure.post("/ticket", data).then((res) => console.log(res.data));
  };
  return (
    <div className="my-10">
      <form
        onSubmit={handleSubmit(handleAddTicket)}
        className="max-w-xl mx-auto p-6 bg-base-200 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Add <span className="text-primary">Ticket</span>
        </h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="image"
            required
            className="input input-bordered w-full"
            {...register("image", { required: true })}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Ticket Title</span>
          </label>
          <input
            type="text"
            name="ticketTitle"
            required
            className="input input-bordered w-full"
            {...register("ticketTitle", { required: true })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">From</span>
            </label>
            <input
              type="text"
              name="from"
              required
              className="input input-bordered w-full"
              {...register("from", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">To</span>
            </label>
            <input
              type="text"
              name="to"
              required
              className="input input-bordered w-full"
              {...register("to", { required: true })}
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Transport Type</span>
          </label>
          <select
            name="transportType"
            className="select select-bordered w-full"
            {...register("transportType", { required: true })}
          >
            <option value="Bus">Bus</option>
            <option value="Car">Car</option>
            <option value="Flight">Flight</option>
            <option value="Train">Train</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              required
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Ticket Quantity</span>
            </label>
            <input
              type="number"
              name="ticketQuantity"
              required
              className="input input-bordered w-full"
              {...register("ticketQuantity", { required: true })}
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Perks</span>
          </label>
          <input
            type="text"
            name="perks"
            placeholder="Camel ride, Dinner"
            className="input input-bordered w-full"
            {...register("perks", { required: true })}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Departure Date & Time</span>
          </label>
          <input
            type="datetime-local"
            name="departureDateTime"
            required
            className="input input-bordered w-full"
            {...register("departureDateTime", { required: true })}
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Add Ticket
        </button>
      </form>
    </div>
  );
};

export default AddTicket;
