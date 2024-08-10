import React, { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImageUrl(data.message); // Set the image URL from the API response
      } catch (error) {
        console.error("Error fetching dog image:", error);
      } finally {
        setIsLoading(false); // Always set loading state to false after request
      }
    };

    fetchDogImage();
  }, []); // Empty dependency array: fetch only once on component mount

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
