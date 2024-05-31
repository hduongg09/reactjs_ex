import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [ma, setMa] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!ma) {
      newErrors.ma = 'Mã không được để trống';
    } else if (!ma.startsWith('NV')) {
      newErrors.ma = 'Mã không đúng định dạng';
    } else if (ma.length < 8) {
      newErrors.ma = 'Mã không được nhỏ hơn 8 ký tự';
    } else if (ma.length > 16) {
      newErrors.ma = 'Mã không được lớn hơn 18 ký tự';
    }

    if (!email) {
      newErrors.email = 'Email không được để trống';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email không đúng định dạng';
    }

    if (password.length < 8) {
      newErrors.password = 'Mật khẩu không được nhỏ hơn 8 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Đăng ký thành công');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>ĐĂNG KÝ</h2>
      <div className="form-group">
        <label htmlFor="ma">Code:</label>
        <input
          type="text"
          id="ma"
          placeholder="Enter Code"
          value={ma}
          onChange={(e) => setMa(e.target.value)}
        />
        {errors.ma && <p>{errors.ma}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className="form-group">
        <input
          type="checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox">Check me out</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
