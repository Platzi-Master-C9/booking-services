const listPlaces = (places) => (status, placeName, hostName) => {
  let listPlacesMock = places;
  if (status) {
    listPlacesMock = listPlacesMock.filter((place) => place.status === status);
  }

  if (placeName) {
    listPlacesMock = listPlacesMock.filter((place) => place.placeName.search(placeName) >= 0);
  }

  if (hostName) {
    listPlacesMock = listPlacesMock.filter((place) => place.hostName.search(hostName) >= 0);
  }

  return listPlacesMock;
};

module.exports = {
  listPlaces,
};
