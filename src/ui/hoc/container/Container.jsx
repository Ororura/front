const Container = ({ children }) => {
  return (
    <div
      style={{
        width: "60%",
        backgroundColor: "#c842ff",
        textAlign: "center",
        margin: "auto",
        marginTop: "40px",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
