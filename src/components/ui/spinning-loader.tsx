export default function SpinningDots({ width }: { width: number | undefined }) {
  if (width) {
    const borderWidth = (width / 10).toString() + "rem";
    const value = `${width}rem`;

    return (
      <span
        className="spinning-loader"
        data-width={width ?? "1rem"}
        style={{
          width: value,
          height: value,
          borderWidth: borderWidth ?? "1rem",
        }}
      />
    );
  }
  return <span className="spinning-loader" />;
}
