const form = document.getElementById('enviar_form');
form.addEventListener('submit', (event) => {
        event.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'ahora eres suculento',
            showConfirmButton: false,
            timer: 1500
          })
        })
