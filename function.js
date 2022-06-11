
const set_alert = (data,type='danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${data} <button class="btn-close" data-bs-dismiss="alert" id="alert_button"></button></p>`
}