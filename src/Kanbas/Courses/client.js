import axios from "axios";
const API_BASE = process.env.REACT_APP_BASE_API_URL;
const COURSES_URL = `${API_BASE}/api/courses`;
//const COURSES_URL = "https://kanbas-node-server-app-yun.onrender.com/api/courses";

export const fetchCourses = async () => {
  // const promise = axios.get("http://localhost:4000/api/courses");
  // promise.then((response) => {
  //   setCourses(response.data);
  // });

  const response = await axios.get(COURSES_URL);
  return response.data;
};

export const fetchCourse = async (id) => {
  const response = await axios.get(`${COURSES_URL}/${id}`);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await axios.delete(`${COURSES_URL}/${id}`);
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(`${COURSES_URL}/${course._id}`, course);
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(COURSES_URL, course);
  return response.data;
};
