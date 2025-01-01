export const AnimatedLoading = () => {
  return (
    <div className="w-full flex justify-center">
      <img
        style={{
          objectFit: "cover",
          height: "12px",
          width: "48px",
        }}
        src="/animated-loading.svg"
      />
    </div>
  );
};
