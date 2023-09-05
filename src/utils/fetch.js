// отправка контактов
const postContactToMail = (dataContact) => {
    
    return fetch(`http://89.223.127.25:8000/api/data/offer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: dataContact.name,
        phone: dataContact.phone,        
      }),
    }).then((res) => {
      if (res.ok) {          
        return res.json();
      }
      // если ошибка, отклоняем промис    
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };

export { postContactToMail };