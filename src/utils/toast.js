import toast from "react-hot-toast";

const notifySuccess = (message) =>
  toast.success(message, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

const notifyError = (message) =>
  toast.error(message, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

export { notifySuccess, notifyError };
