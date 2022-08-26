import axios from 'axios';

const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

const getCSRFIfNotExist = async (csrftoken) => {
        if (!csrftoken) {
            let temp = null
            await axios.post('http://www.ace.project/api/csrf-get/'
            ).then(function (response) {
                console.log(response.data)
                temp = getCookie('csrftoken')
            })
            .catch(function (error) {
                console.log(error.data)
            })
            return temp
        }
        return csrftoken
}

export {getCookie, getCSRFIfNotExist}