import React, {useState, useEffect} from 'react'
import EmployeeService from "../../services/EmployeeService"

function ReadComponent() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getEmployees()
    }, [])

    const getEmployees = () => {

        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        });
    };

    
    return (
        <div>
            <h1 className = "text-center"> Employee List</h1>
            <table className = "table table-striped">
                <thead>
                    <tr>

                        <td> Employee Id</td>
                        <td> Employee First Name</td>
                        <td> Employee Last Name</td>
                        <td> Employee Email Id</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee => 
                            <tr key = {employee.id}>
                                <td> {employee.id}</td>   
                                <td> {employee.firstName}</td>   
                                <td> {employee.lastName}</td>   
                                <td> {employee.email}</td>   
                            </tr>
                        )
                    }

                </tbody>
            </table>

        </div>

    )
    
}

export default ReadComponent;