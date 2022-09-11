export const weatherCity = async (city, metric) => {
  const weatherApiKey = "28159479b9347b0c2d0dbe3467b5a6da";

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=${metric}&lang="he"`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error fetching weather");
  }
};
