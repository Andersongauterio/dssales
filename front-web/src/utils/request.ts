import { FilterData } from './../types';
import  axios  from "axios";
import { formatDateToServer } from './formatters';

const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL
});

export const buildFilterParams = (FilterData?: FilterData) => {
  return {
    minDate: formatDateToServer(FilterData?.dates?.[0]),
    maxDate: formatDateToServer(FilterData?.dates?.[1]),
    gender: FilterData?.gender
  };
};
