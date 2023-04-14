const form = document.getElementById('enviar_form');

form.addEventListener('click', (event) => {
        event.preventDefault();
        
        Swal.fire ({
            position: 'center',
            icon: 'success',
            title: 'Ahora eres suculento',
            showConfirmButton: false,
            timer: 1500
          })
        })
