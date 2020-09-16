export const goToAplicationPage = (history) => {
    history.push("/aplication");
  };
  export const goToTripsPage = (history) => {
    history.push("/list");
  };
  export const goToLoginPage = (history) => {
    history.push("/login");
  };
  export const goToHomePage = (history) => {
    history.push("/");
  };
  export const goBack = (history) => {
    history.goBack();
  };
  export const goToTripDetailsPage = (history) => { 
      history.push("/details")
  };