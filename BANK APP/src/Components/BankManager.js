import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './Bankmanager.css';

const API_BASE_URL = 'http://localhost:8082/api/banks';

function BankManager() {
  const [banks, setBanks] = useState([]);
  const [newBank, setNewBank] = useState({ bankname: '', acctype: '', accholdname: '' });

  useEffect(() => {
    axios.get(API_BASE_URL)
      .then(response => setBanks(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBank({ ...newBank, [name]: value });
  };

  const addBank = () => {
    axios.post(API_BASE_URL, newBank)
      .then(response => {
        setBanks([...banks, response.data]);
        setNewBank({ bankname: '', acctype: '', accholdname: '' });
      })
      .catch(error => console.error(error));
  };

  const updateBank = (id) => {
    axios.put(`${API_BASE_URL}/${id}`, newBank)
      .then(response => {
        const updatedBanks = banks.map(bank => (bank.id === id ? response.data : bank));
        setBanks(updatedBanks);
        setNewBank({ bankname: '', acctype: '', accholdname: '' });
      })
      .catch(error => console.error(error));
  };

  const deleteBank = (id) => {
    axios.delete(`${API_BASE_URL}/${id}`)
      .then(() => {
        const updatedBanks = banks.filter(bank => bank.id !== id);
        setBanks(updatedBanks);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="bank-manager">
      <h2>BANK DETAILS</h2>
      
      
      <div>
        <h2>ADD BANK</h2>
        <div className="bank-form">
          <input
            type="text"
            name="bankname"
            placeholder="Bankname"
            value={newBank.bankname}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="acctype"
            placeholder="Acctype"
            value={newBank.acctype}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="accholdname"
            placeholder="Accholdname"
            value={newBank.accholdname}
            onChange={handleInputChange}
          />
          <button onClick={addBank}>Add</button>
        </div>
      </div>
      <div>
        <h2>UPDATE OR DELETE</h2>
        <ul className="bank-list">
          {banks.map(bank => (
            <li key={bank.id} className="bank-item">
              <span>Bank name: {bank.bankname}</span>
              <span>Account type: {bank.acctype}</span>
              <span>Account holdername: {bank.accholdname}</span>
              <div className="bank-buttons">
                <button onClick={() => updateBank(bank.id)}>Update</button>
                <button onClick={() => deleteBank(bank.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
}

export default BankManager;
