import { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <Toaster
      duration="4000"
      position="top-right"
      containerStyle={{ top: 100 }}
      toastOptions={{
        style: {
          border: "2px solid #87cefa",
          padding: "14px",
          color: "#212121",
        },
      }}
    />
  );
}
export default Toast;
