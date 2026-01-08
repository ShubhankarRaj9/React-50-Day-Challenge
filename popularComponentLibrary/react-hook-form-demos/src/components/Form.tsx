import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          placeholder="Enter your Name"
        />

        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
        />
        {errors.email && (
          <div style={{ color: "red" }}>{errors.email.message}</div>
        )}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password must be at least 8 character",
            },
          })}
          placeholder="Password"
        />
        {errors.email && (
          <div style={{ color: "red" }}>{errors.email.message}</div>
        )}
      </div>
      <button
        type="submit"
        style={{
          color: "white",
          backgroundColor: "blue",
          borderRadius: "25px",
          width: "100px",
        }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loading" : "Submit"}
      </button>
    </form>
  );
};

export default Form;
