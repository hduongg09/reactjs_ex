import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [employeeCode, setEmployeeCode] = useState('');
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employeeCode) {
      setError('Mã nhân viên không được để trống');
    } else if (!employeeCode.startsWith('NV')) {
      setError('Mã nhân viên không đúng định dạng');
    } else if (employeeCode.length < 8) {
      setError('Mã nhân viên không được ngắn hơn 8 ký tự');
    } else if (employeeCode.length > 16) {
      setError('Mã nhân viên không được dài hơn 16 ký tự');
    } else {
      setEmployees([...employees, employeeCode]);
      setEmployeeCode('');
      setError('');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Thêm Nhân Viên</h2>
      <div className="form-group">
        <label htmlFor="employeeCode">Mã nhân viên:</label>
        <input
          type="text"
          id="employeeCode"
          placeholder="Nhập mã nhân viên"
          value={employeeCode}
          onChange={(e) => setEmployeeCode(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
      </div>
      <button type="submit">Submit</button>
      <div className="employee-list">
        <h3>Danh sách nhân viên:</h3>
        <ul>
          {employees.map((emp, index) => (
            <li key={index}>{emp}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default Form;
