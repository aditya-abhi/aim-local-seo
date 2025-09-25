export const openGeoEnrollModal = () => {
  document
    .getElementById("uc-geo-enroll-modal")
    .classList.add("uc-offcanvas-overlay");
  document.getElementById("uc-geo-enroll-modal").classList.add("uc-open");
};
export const closeGeoEnrollModal = () => {
  document
    .getElementById("uc-geo-enroll-modal")
    .classList.remove("uc-offcanvas-overlay");
  document.getElementById("uc-geo-enroll-modal").classList.remove("uc-open");
};


