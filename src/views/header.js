import { Image } from "@jikji/react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 0px 30px",
      }}
    >
      <Image
        width={140}
        src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
      />

      <div
        style={{
          fontWeight: 600,
          fontSize: "17px",
          color: "red",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Test Solutiosn Ltd
      </div>
    </div>
  );
}

export default Header;
