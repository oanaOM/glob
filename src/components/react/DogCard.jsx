import { useEffect, useState } from "react";

const DogCard = () => {
  const [dog, setDog] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
        const newData = await response.json();
        setDog(newData);
      } catch (error) {
        console.err(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Is Loading...</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {dog.status == "success" && (
        <img src={dog.message} width="300" height="auto" />
      )}
      <button
        style={{
          display: "block",
          padding: "1rem",
          borderRadius: "16px",
          backgroundColor: "white",
          fontFamily: "monospace",
          marginTop: "20px",
          "&:hover": {
            backgroundColor: "purple",
          },
        }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Show me another dog
      </button>
    </div>
  );
};

export default DogCard;
