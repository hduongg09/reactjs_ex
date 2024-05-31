import React, { useState } from 'react';

function EmployeeForm() {
  const [employeeCodes, setEmployeeCodes] = useState([
    'E001', 'E002', 'E003', 'E004', 'E005',
    'E006', 'E007', 'E008', 'E009', 'E010'
  ]);

  // State để lưu trữ giá trị của ô input và thông báo
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  // Hàm xử lý khi thay đổi giá trị của ô input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Hàm xử lý khi nhấn nút submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setMessage('Mã nhân viên không được để trống');
    } else if (employeeCodes.includes(inputValue)) {
      setMessage('Mã nhân viên đã tồn tại trong hệ thống');
    } else {
      setEmployeeCodes([...employeeCodes, inputValue]);
      setMessage('Thêm mã nhân viên thành công');
    }
    // Xóa input sau khi submit
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mã nhân viên: </label>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      <h2>Danh sách mã nhân viên</h2>
      <ul>
        {employeeCodes.map((code, index) => (
          <li key={index}>{code}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeForm;

