export const city = async (place) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiaXpha2ZyZW5rZWwiLCJhIjoiY2w2OWNoYzl4MG54aDNrcXNpeWVlZ2hlYiJ9.YZJCNSqpdA09Kc4eh4ivRw&cachebuster=1625641871908&autocomplete=true&types=place`
      );
      const data = await response.json();
      return data;
    } 
    catch (err) {
      return { error: "Unable to retrieve places" };
    }
  };