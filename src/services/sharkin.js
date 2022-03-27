import Api from './api';
const SharkinService = {
    index: () => Api.get('/sharkin/list', {
        headers : {'x-access-token': localStorage.getItem('token')}
    }),
}

export default SharkinService;