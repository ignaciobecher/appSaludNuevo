// Obtener el formulario por su ID
const form = document.getElementById("formTotal");

const sendForm = (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del formulario (envío)

  // Obtener los valores de los campos de entrada por sus ID
  const name = document.getElementById("inputName").value;
  const surname = document.getElementById("inputSurname").value;
  const email = document.getElementById("inputEmail").value;
  const message = document.getElementById("inputMessage").value;

  if (name === "" || surname === "" || email === "" || message === "") {
    window.alert('Todos los campos son obligatorios');
    console.log('Todos los campos son obligatorios');
  } else {
    // Construir un objeto templateParams con los valores
    const templateParams = {
      name: name,
      surname: surname,
      email: email,
      message: message
    };

    // Enviar el formulario
    emailjs.send('service_4efqxl9', 'template_hkl053k', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);

        // Vaciar el formulario después de enviarlo
        form.reset();
      })
      .catch(function (error) {
        console.log('FAILED...', error);
      });
  }
};

// Agregar un evento de escucha para el envío del formulario
form.addEventListener("submit", sendForm);
