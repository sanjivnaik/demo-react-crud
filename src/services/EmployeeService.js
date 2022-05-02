import axios from 'axios'

const EMPLOYEES_REST_API_URL = 'http://localhost:8081/api/employees';

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEES_REST_API_URL);
    }
}

export default new EmployeeService();