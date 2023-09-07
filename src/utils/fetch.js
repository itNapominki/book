// отправка контактов
const postContactToMail = (dataContact) => {

const token = '6450034196:AAEox0yEpY5_jYhDUQh_XON8JWPjgnKPiB4';
const chatId = '1250383483';
//const message = 'Hello, World!';

const message = `Новая заявка с лид Магнита\
                \n\n Имя: ${dataContact.name}\
                \n Телефон: ${dataContact.phone}\
                \n\n * Инструкция для менеджера\
                \n Через 5 минут задать вопрос заказчику:\
                \n "Получилось ли у вас скачать наш полезный материал?"\
                \n После ответа действуем по скрипту.`;

fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

    
    // return fetch(`http://89.223.127.25:8000/api/data/offer`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: dataContact.name,
    //     phone: dataContact.phone,        
    //   }),
    // }).then((res) => {
    //   if (res.ok) {          
    //     return res.json();
    //   }
    //   // если ошибка, отклоняем промис    
    //   return Promise.reject(`Ошибка: ${res.status}`);
    // });
  };

export { postContactToMail };