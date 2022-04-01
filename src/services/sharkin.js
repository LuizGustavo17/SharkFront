import Api from './api';
const SharkinService = {
    index: () => Api.get('/sharkin/list', {
        headers : {'x-access-token': localStorage.getItem('token')}
    }),
    sharkin: () => Api.post('/sharkin/sharkin'),
    sharkout: () => Api.post('/sharkin/sharkout')
}

export default SharkinService;